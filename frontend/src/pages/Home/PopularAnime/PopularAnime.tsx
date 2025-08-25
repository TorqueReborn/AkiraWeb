import { useEffect, useState } from "react"
import Card from "./components/Card"
import type { Anime } from "../../../interface/Anime"

const PopularAnime = () => {
    const [data, setData] = useState<Anime[]>([])

    useEffect(() => {
        const popular = async () => {
            const response = await fetch('http://localhost:3000/api/anime/trending')
            setData(await response.json())
        }
        popular()
    }, [])

    return (
        <div>
            {data && data.map((d: Anime) => <Card title={d.englishName} thumbnail={d.thumbnail} />)}
        </div>
    )
}

export default PopularAnime