import React, { useRef, useState } from "react"

const Progressbar = () => {
    const progressRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressRef.current) {
            const box = progressRef.current.getBoundingClientRect()
            const clickedX = e.clientX - box.left
            const percent = Math.floor((clickedX / box.width) * 100)
            setProgress(percent)
        }
    }

    return (
        <div ref={progressRef} onClick={handleClick} className="cursor-pointer bg-amber-300">
            <div style={{ width: `${progress}%` }} className="h-1 bg-white" />
        </div>
    )
}

export default Progressbar