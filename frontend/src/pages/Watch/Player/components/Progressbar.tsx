import React, { useRef, useState } from "react"

const Progressbar = ({ video }: { video: React.RefObject<HTMLVideoElement | null> }) => {
    const progressRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressRef.current && video.current) {
            const box = progressRef.current.getBoundingClientRect()
            const clickedX = e.clientX - box.left
            const percent = clickedX / box.width
            setProgress(percent * 100)
            video.current.currentTime = percent * video.current.duration
        }
    }

    return (
        <div ref={progressRef} onClick={handleClick} className="w-full cursor-pointer bg-amber-300">
            <div style={{ width: `${progress}%` }} className="h-1 bg-white" />
        </div>
    )
}

export default Progressbar