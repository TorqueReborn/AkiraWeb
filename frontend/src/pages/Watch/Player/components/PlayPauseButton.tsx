import type { Dispatch, RefObject, SetStateAction } from "react"
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5"

interface PlayPauseButtonProps {
    playing: boolean,
    videoRef: RefObject<HTMLVideoElement | null>,
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const PlayPauseButton = ({ playing, videoRef, setIsPlaying }: PlayPauseButtonProps) => {

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!playing)
        }
    }

    return (
        <div>
            {playing ? <IoPauseOutline size={50} onClick={handlePlayPause} /> : <IoPlayOutline size={50} onClick={handlePlayPause} />}
        </div>
    )
}

export default PlayPauseButton