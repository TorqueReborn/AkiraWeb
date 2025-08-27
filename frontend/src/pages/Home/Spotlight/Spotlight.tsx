import { useEffect, useState, type ReactElement } from "react"
import Banner from './components/Banner'

interface Anime {
  _id: string,
  englishName: string,
  thumbnail: string,
  description: string
}

const Spotlight = () => {
  const [index, setIndex] = useState(0)
  const [animeData, setAnimeData] = useState<Anime[]>([])

  useEffect(() => {
    const fetchSpotlight = async () => {
      const spot = await fetch('http://localhost:3000/api/spotlight')
      const rawJSON = await spot.json()
      const ids = rawJSON.animes.map((anime: Anime) => {
        return { _id: anime._id, englishName: anime.englishName, thumbnail: anime.thumbnail, description: anime.description }
      })
      setAnimeData(ids)
    }
    fetchSpotlight()
  }, [])

  useEffect(() => {
    if (animeData.length > 0) {
      const time = setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % animeData.length), 5000)
      return () => clearTimeout(time)
    }
  }, [animeData, index])

  return (
    <div>
      {animeData.length > 0 && <Banner title={animeData[index].englishName} img={animeData[index].thumbnail} description={animeData[index].description}/>}
    </div>
  )
}

export default Spotlight