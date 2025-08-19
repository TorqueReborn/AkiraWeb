import { useEffect, useState, type ReactNode } from "react";
import Splash from "./splash/Splash"
import Card from "./components/Card";

interface Anime {
  id: string,
  name: string,
  thumbnail: string
}

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");
  const [animes, setAnimes] = useState<ReactNode[]>([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch("http://localhost:3000/latest");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAnimes(data.map((anime: Anime) => {
          return <div key={anime.id}>
            <Card name={anime.name} thumbnail={anime.thumbnail} />
          </div>
        }));
      } catch (error) {
        console.error("Failed to fetch animes:", error);
      }
    };
    fetchAnimes();
  }, []);

  return (
    <div className="font-poppins">
      {splashSeen ? null : <Splash />}
      <div className="flex">
        {animes.length > 0 ? animes : <p>Loading animes...</p>}
      </div>
    </div>
  )
}

export default App