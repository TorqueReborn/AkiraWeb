import { useEffect } from "react"

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
    <div>Spotlight</div>
  )
}

export default Spotlight