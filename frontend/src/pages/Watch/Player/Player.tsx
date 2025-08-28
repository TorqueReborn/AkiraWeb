import Progressbar from "./components/Progressbar"
import { useEffect, useRef, useState } from "react"
import PlayPauseButton from "./components/PlayPauseButton"

const Player = ({ videoUri }: { videoUri: string }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            console.log(e.key)
            if (e.key === ' ') {
                e.preventDefault()
                handlePlayPause()
            } else if (e.key === 'ArrowRight') {
                e.preventDefault()
                if (videoRef.current) {
                    videoRef.current.currentTime += 5
                }
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault()
                if (videoRef.current) {
                    videoRef.current.currentTime -= 5
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                if (videoRef.current) {
                    videoRef.current.volume = videoRef.current.volume + 0.1
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault()
                if (videoRef.current) {
                    videoRef.current.volume = videoRef.current.volume - 0.1
                }
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handlePlayPause])

    return (
        <div className="relative w-[50vw] flex items-center justify-center">
            <video ref={videoRef} src={videoUri} className="w-full h-full" />
            <div className="absolute bottom-1/2">
                <PlayPauseButton videoRef={videoRef} playing={isPlaying} setIsPlaying={setIsPlaying}/>
            </div>
            <div className="absolute bottom-12 h-1 w-[45vw]">
                <Progressbar videoRef={videoRef}/>
            </div>
        </div>
    )
}

export default Player