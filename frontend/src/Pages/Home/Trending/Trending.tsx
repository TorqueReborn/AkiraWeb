import { useEffect } from "react"
import Card from "./components/Card"

const Trending = () => {
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
        }
        getData()
    }, [])

    return (
        <div>
            <Card>I am a card</Card>
        </div>
    )
}

export default Trending