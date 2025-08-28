import { useEffect, useRef, useState, type RefObject } from "react"

interface ProgressbarProps {
  videoRef: RefObject<HTMLVideoElement | null>
}

const Progressbar = ({ videoRef }: ProgressbarProps) => {
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  const progressRef = useRef<HTMLDivElement>(null)

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${formatedMinutes}:${formatedSeconds}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const box = progressRef.current.getBoundingClientRect()
      const clickedX = e.clientX - box.left
      const percent = clickedX / box.width
      setProgress(percent * 100)
      videoRef.current.currentTime = percent * videoRef.current.duration
    }
  }

  const handleLoadedMetaData = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration)
        }
    }

  const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrent(videoRef.current.currentTime)
            setProgress(Math.floor((videoRef.current.currentTime / videoRef.current.duration) * 100))
        }
    }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.ontimeupdate = handleTimeUpdate
      videoRef.current.onloadedmetadata = handleLoadedMetaData
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.ontimeupdate = null
      videoRef.current.onloadedmetadata = null
      }
    };
  }, [])

  return (
    <div className="flex items-center">
      <div className="mr-2 w-14">{formatTime(current)}</div>
      <div ref={progressRef} className="w-full cursor-pointer bg-amber-300" onClick={handleProgressClick}>
        <div style={{ width: `${progress}%` }} className="h-1 bg-white" />
      </div>
      <div className="ml-2">{formatTime(duration)}</div>
    </div>
  )
}

export default Progressbar