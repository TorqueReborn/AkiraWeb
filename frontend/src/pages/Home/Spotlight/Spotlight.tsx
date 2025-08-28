import Banner from './components/Banner'
import { useEffect, useState } from "react"
import { generatePost } from "../../../utils"

interface Anime {
  _id: string,
  englishName: string,
  banner: string,
  description: string
}

const Spotlight = () => {
  const [index, setIndex] = useState(0)
  const [animeData, setAnimeData] = useState<Anime[]>([])

  // Fetch spotlight
  useEffect(() => {
    const fetchSpotlight = async () => {
      const spot = await fetch('http://localhost:3000/api/spotlight', generatePost({ data: "_id,englishName,banner,description" }))
      const ids = (await spot.json()).animes.map((anime: Anime) => {
        return { _id: anime._id, englishName: anime.englishName, banner: anime.banner, description: anime.description }
      })
      setAnimeData(ids)
    }
    fetchSpotlight()
  }, [])

  // Update spotlight once per 5 second
  useEffect(() => {
    if (animeData.length > 0) {
      const time = setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % animeData.length), 5000)
      return () => clearTimeout(time)
    }
  }, [animeData, index])

  return (
    <div>
      {animeData.length > 0 && <Banner id={animeData[index]._id} title={animeData[index].englishName} img={animeData[index].banner} description={animeData[index].description} />}
    </div>
  )
}

export default Spotlight