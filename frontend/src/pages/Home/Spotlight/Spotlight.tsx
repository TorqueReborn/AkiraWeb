import { useEffect } from "react"
import Banner from './components/Banner'

interface Anime {
  _id: string,
  englishName: string,
  thumbnail: string
}

const Spotlight = () => {

  useEffect(() => {
    const fetchSpotlight = async () => {
      const spot = await fetch('http://localhost:3000/api/spotlight')
      const rawJSON = await spot.json()
      const ids = rawJSON.animes.map((anime: Anime) => {
        return { _id: anime._id, englishName: anime.englishName, thumbnail: anime.thumbnail }
      })
    }
    fetchSpotlight()
  }, [])

  return (
    <div className="h-screen">
      <Banner img="https://s4.anilist.co/file/anilistcdn/media/anime/banner/184237-SBj6UJvIWAOg.jpg"/>
    </div>
  )
}

export default Spotlight