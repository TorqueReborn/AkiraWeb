import { useRef } from "react"
import Controls from "./components/Controls"

const Player = ({ videoUri }: { videoUri: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div className="w-[50vw]">
            <video ref={videoRef} src={videoUri} className="w-full h-full" />
            <Controls videoRef={videoRef}/>
        </div>
    )
}

export default Player