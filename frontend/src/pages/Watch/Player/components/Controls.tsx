import type { RefObject } from "react"
import PlayPauseButton from "./PlayPauseButton"
import Progressbar from "./Progressbar"

interface ControlsProps {
    videoRef: RefObject<HTMLVideoElement | null>
}

const Controls = ({videoRef}: ControlsProps) => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute bottom-0">
                <PlayPauseButton videoRef={videoRef} />
            </div>
            <div className="absolute bottom-12 h-1 w-[45vw]">
                <Progressbar videoRef={videoRef} />
            </div>
        </div>
    )
}

export default Controls