import { useEffect, useState } from "react"
import SpotCard from "./SpotCard"

interface SpotlightData {
    _id: string;
    name: string;
    description: string;
    banner: string;
}

const Spotlight = () => {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState<SpotlightData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/spotlight');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Failed to fetch spotlight data:', error);
            }
        }

        fetchData();
    }, [])

    const handleClick = () => {
        if (data.length === 0) return;
        setIndex((prevIndex) => (prevIndex + 1) % data.length)
    }

    return (
        <div>
            {data.length > 0 ? (<SpotCard name={data[index].name} description={data[index].description} banner={data[index].banner} />) : null}
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default Spotlight