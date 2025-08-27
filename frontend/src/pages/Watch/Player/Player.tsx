import { useRef, useState } from "react"
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5"
import Progressbar from "./components/Progressbar"

const Player = ({ videoUri }: {videoUri: string}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState<number>(0)
    const [current, setCurrent] = useState<number>(0)

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = Math.floor(timeInSeconds % 60)
        const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes
        const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds
        return `${formatedMinutes}:${formatedSeconds}`
    }

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

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrent(videoRef.current.currentTime)
        }
    }

    const handleLoadedMetaData = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration)
        }
    }

    return (
        <div className="relative w-[50vw] flex items-center justify-center">
            <video ref={videoRef} src={videoUri} className="w-full h-full" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetaData} />
            {isPlaying ? <IoPauseOutline className="absolute bottom-1/2 w-8 h-8" onClick={handlePlayPause} /> : <IoPlayOutline className="absolute bottom-1/2 w-8 h-8" onClick={handlePlayPause} />}
            <div className="absolute h-1 bottom-6 w-[45vw] flex items-center">
                <div className="mr-2">{formatTime(current)}</div>
                <Progressbar video={videoRef} />
                <div className="ml-2">{formatTime(duration)}</div>
            </div>
        </div>
    )
}

export default Player