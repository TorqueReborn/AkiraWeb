import type { Anime } from "../../Anime"
import Card from "./components/Card"
import { useEffect, useState } from "react"

const Home = () => {
  const [anime, setAnime] = useState<Anime[]>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
      const edges = await response.json()
      const animes: Anime[] = edges.map((edge: any) => ({
        name: edge.englishName,
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