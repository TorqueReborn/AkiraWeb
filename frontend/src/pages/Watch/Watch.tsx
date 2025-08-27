import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { generatePost } from "../../utils"

const Watch = () => {
    const { id, episode } = useParams()
    const [videoUri, setVideoUri] = useState()

    useEffect(() => {
        const fetchVideoUri = async () => {
            if (id && episode) {
                const response = await fetch(`http://localhost:3000/api/anime/${id}/${episode}`, generatePost({"translationType": "sub"}))
                setVideoUri(await response.json())
            }
        }
        fetchVideoUri()
    }, [])

    return (
        <div>
            <video width={640} height={360} controls>
                <source src={videoUri} />
            </video>
        </div>
    )
}

export default Watch