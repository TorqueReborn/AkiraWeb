import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Watch = () => {
  const [videoURL, setVideoURL] = useState<string>("")
  const params = useParams()
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/episode?id=${params.id}&type=sub&episode=${params.episode}`)
      const json = await response.json()
      setVideoURL(json.legacyVideoURL)
    }
    getData()
  }, [])

  return (
    <div>
      <video src={videoURL} controls={true}></video>
    </div>
  )
}

export default Watch