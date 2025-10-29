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
        <div className="mt-4">
            <h2 className="mb-4 text-4xl font-bold ml-4">
                Trending
            </h2>
            <div className="flex overflow-scroll scrollbar-hide">
                {anime?.map(an => <Card name={an.name} thumbnail={an.thumbnail} />)}
            </div>
        </div>
    )
}

export default Trending