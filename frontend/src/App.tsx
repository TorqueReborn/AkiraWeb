import { useEffect, useState } from "react";
import { latestAnime } from "./utils";

const App = () => {
  const [anime, setAnime] = useState<any>([]);

  useEffect(() => {
    const animes = latestAnime();
    setAnime(animes);
  }, []);

  return (
    <div className="font-poppins">
      {anime}
    </div>
  )
}

export default App