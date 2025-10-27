import { useEffect } from "react"

const Spotlight = () => {
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/recent`)
            
        }
        getData()
    }, [])

    return (
        <div>
        </div>
    )
}

export default Spotlight