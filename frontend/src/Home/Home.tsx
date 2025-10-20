import { useEffect, useState } from "react"
import type { Anime } from "../Anime"

const Home = () => {
  const [anime, setAnime] = useState<Anime[]>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
      const json = await response.json()
      const edges = json.data.shows.edges
      const animes: Anime[] = edges.map((edge: Anime) => ({
        name: edge.name,
        thumbnail: edge.thumbnail
      }))
      setAnime(animes)
    }
    getData()
  }, [])
  return (
    <div>

    </div>
  )
}

export default Home