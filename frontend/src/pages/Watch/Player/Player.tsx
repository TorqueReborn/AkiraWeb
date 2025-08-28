import { useRef } from "react"
import Controls from "./components/Controls"

const Player = ({ videoUri }: { videoUri: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div className="w-[50vw] relative group">
            <video ref={videoRef} src={videoUri} className="w-full h-full" />
            <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-300 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100">
                <Controls videoRef={videoRef} />
            </div>
        </div>
    )
}

export default Player