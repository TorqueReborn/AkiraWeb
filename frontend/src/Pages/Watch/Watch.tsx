import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Watch = () => {
  const params = useParams()
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/episode`)
      const edges = await response.json()
    }
    getData()
  }, [])

  return (
    <div>Watch</div>
  )
}

export default Watch