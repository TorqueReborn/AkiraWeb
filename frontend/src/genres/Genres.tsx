import { useEffect, useState } from 'react'
import Card from './components/Card'
import { AiFillRightCircle } from 'react-icons/ai'

interface Anime {
    _id: string,
    englishName: string,
    thumbnail: string
}

const Genres = () => {
    const [data, setData] = useState<Anime[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:3000/api/anime/trending')
            const rawJSON = await data.json()
            const trending = rawJSON.slice(0, 5)
            setData(trending)
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="text-3xl mb-20">
                What anime do you like?
            </div>
            <div className="flex gap-10">
                {(data.map((d:Anime) => (<div key={d._id}><Card name={d.englishName} thumbnail={d.thumbnail}/></div>)))}
                {loading && Array.from({length:5}, (_,i) => <div key={i}><Card name='Loading...' thumbnail=''/></div>)}
            </div>
            <button className="rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 mt-20">
                <AiFillRightCircle className="text-5xl cursor-pointer" />
            </button>
        </div>
    )
}

export default Genres