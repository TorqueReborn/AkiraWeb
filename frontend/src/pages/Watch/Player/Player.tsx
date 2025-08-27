import { useRef, useState } from "react"
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5"

interface PlayerProps {
    videoUri: string
}

const Player = ({ videoUri }: PlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        if (videoRef) {
            if (isPlaying) {
                videoRef.current?.pause()
            } else {
                videoRef.current?.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="bg-white relative w-[50vw] flex items-center justify-center">
            <video ref={videoRef} src={videoUri} className="w-full h-full" />
            {isPlaying ? <IoPauseOutline className="absolute bottom-1/2 w-8 h-8" onClick={handlePlayPause} /> : <IoPlayOutline className="absolute bottom-1/2 w-8 h-8" onClick={handlePlayPause} />}
        </div>
    )
}

export default Player