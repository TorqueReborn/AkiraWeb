import { useEffect, useState } from "react"

interface Anime {
    name: string,
    banner: string
}

const Spotlight = () => {
    const [index, setIndex] = useState(0)
    const [banners, setBanners] = useState<Anime[]>()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
            const json = await response.json()
            setBanners(json.map((j: Anime) => j))
        }
        getData()
    }, [])

    return (
        <div>
            {banners && <img src={banners[index].banner} alt="Anime Banner" />}
        </div>
    )
}

export default Spotlight