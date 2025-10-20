import Card from "./components/Card"
import type { Anime } from "../Anime"
import { useEffect, useState } from "react"

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
      {anime?.map(ani => (
        <Card name={ani.name} thumbnail={ani.thumbnail} />
      ))}
    </div>
  )
}

export default Home