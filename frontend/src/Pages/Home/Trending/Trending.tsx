import { useEffect, useState } from "react"
import Card from "./components/Card"

interface Anime {
    name: string,
    thumbnail: string
}

const Trending = () => {
    const [anime, setAnime] = useState<Anime[] | null>()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
            const json = await response.json()
            setAnime(json.map((j: any) => ({
                name: j.englishName || j.name,
                thumbnail: j.thumbnail
            })))
        }
        getData()
    }, [])

    return (
        <div>
            {anime?.map(an => <Card name={an.name} thumbnail={an.thumbnail}/>)}
        </div>
    )
}

export default Trending