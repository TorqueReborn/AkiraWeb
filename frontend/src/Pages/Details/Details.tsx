import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/ids?ids=${params.id}`)
      const json = await response.json()
      console.log(json)
    }
    getData()
  }, [])

  return (
    <div>
      {params.id}
    </div>
  )
}

export default Details