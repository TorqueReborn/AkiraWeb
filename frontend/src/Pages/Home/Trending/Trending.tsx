import { useEffect } from "react"

const Trending = () => {
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
        }
        getData()
    }, [])

    return (
        <div>Trending</div>
    )
}

export default Trending