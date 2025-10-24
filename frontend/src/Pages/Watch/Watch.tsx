import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Watch = () => {
  const params = useParams()
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/ids?ids=${params.id}`)
      const edges = await response.json()
      console.log(edges)
    }
    getData()
  }, [])

  return (
    <div>Watch</div>
  )
}

export default Watch