import { useEffect } from "react"

interface Anime {
  id: string
}

const Spotlight = () => {

  useEffect(() => {
    const fetchSpotlight = async () => {
      const spot = await fetch('http://localhost:3000/api/spotlight')
      const rawJSON = await spot.json()
      const ids = rawJSON.animes.map((anime: Anime) => {
        return {id: anime.id}
      })
      console.log(ids)
    }
    fetchSpotlight()
  }, [])

  return (
    <div>Spotlight</div>
  )
}

export default Spotlight