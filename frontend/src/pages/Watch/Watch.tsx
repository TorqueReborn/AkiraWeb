import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { generatePost } from "../../utils"
import Player from "./Player/Player"

const Watch = () => {
    const { id, episode } = useParams()
    const [videoUri, setVideoUri] = useState('')

    useEffect(() => {
        const fetchVideoUri = async () => {
            if (id && episode) {
                const response = await fetch(`http://localhost:3000/api/anime/episode`, generatePost({ id, episode, translationType: "sub" }))
                setVideoUri(await response.json())
            }
        }
        fetchVideoUri()
    }, [])

    return (
        <div className="h-screen w-scren">
            <Player videoUri={videoUri} />
        </div>
    )
}

export default Watch