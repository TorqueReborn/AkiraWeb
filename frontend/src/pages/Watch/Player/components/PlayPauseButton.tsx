import { useEffect, useState, type RefObject } from "react"
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5"

interface PlayPauseButtonProps {
    videoRef: RefObject<HTMLVideoElement | null>
}

const PlayPauseButton = ({ videoRef }: PlayPauseButtonProps) => {
    const [isPlaying, setIsPlaying] = useState(false)

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
        <div className="w-[50vw] h-[60vh] flex items-center justify-center" onClick={handlePlayPause}>
            {isPlaying ? <IoPauseOutline size={50} /> : <IoPlayOutline size={50} />}
        </div>
    )
}

export default PlayPauseButton