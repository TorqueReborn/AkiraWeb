import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [anime, setAnime] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/latest');
        const result = await response.json();
        const animes = result.data.shows.edges
        .map((edge: any ) => {
          let thumbnail = edge.thumbnail
          if (!thumbnail.startsWith("https://")) {
            thumbnail = 'https://wp.youtube-anime.com/aln.youtube-anime.com/' + thumbnail;
          }
          return <div key={edge._id}>
            <Card name={edge.name} thumbnail={thumbnail}/>
          </div>
        })
        setAnime(animes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="font-poppins">
      {anime}
    </div>
  )
}

export default App