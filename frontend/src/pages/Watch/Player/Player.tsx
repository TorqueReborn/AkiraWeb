import Progressbar from "./components/Progressbar"
import { useRef } from "react"
import PlayPauseButton from "./components/PlayPauseButton"

const Player = ({ videoUri }: { videoUri: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div className="relative w-[50vw] flex items-center justify-center">
            <video ref={videoRef} src={videoUri} className="w-full h-full" />
            <div className="absolute bottom-1/2">
                <PlayPauseButton videoRef={videoRef}/>
            </div>
            <div className="absolute bottom-12 h-1 w-[45vw]">
                <Progressbar videoRef={videoRef}/>
            </div>
        </div>
    )
}

export default Player