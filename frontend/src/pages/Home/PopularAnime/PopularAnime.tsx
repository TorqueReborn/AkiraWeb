import { useEffect, useRef, useState } from "react"
import Card from "./components/Card"
import type { Anime } from "../../../interface/Anime"
import { generatePost } from "../../../utils"

const PopularAnime = () => {
    const [data, setData] = useState<Anime[]>([])
    const scrollRef = useRef<HTMLDivElement>(null)

    const handleMouseScroll = (e: React.WheelEvent) => {
        if (scrollRef.current) {
            if (e.deltaY > 0) {
                scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
            } else {
                scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
            }
        }
    }

    useEffect(() => {
        const popular = async () => {
            const response = await fetch('http://localhost:3000/api/anime/trending', generatePost({data: "_id,englishName,thumbnail"}))
            setData(await response.json())
        }
        popular()
    }, [])

    return (
        <div>
            <h1 className="ml-10 my-4 text-3xl text-amber-400">Popular</h1>
            <div className="flex overflow-x-scroll overflow-y-clip no-scrollbar" ref={scrollRef} onWheel={handleMouseScroll}>
                {data && data.map((d: Anime, index: number) => <div key={d._id}><Card number={index + 1} title={d.englishName} thumbnail={d.thumbnail} /></div>)}
            </div>
        </div>
    )
}

export default PopularAnime