import { useEffect, useState } from 'react'
import Card from './components/Card'
import { AiFillRightCircle } from 'react-icons/ai'
import Cookies from 'js-cookie'

interface Anime {
    _id: string,
    englishName: string,
    thumbnail: string
}

interface SuggestionsProps {
    setShowLogin: Function
}

const Suggestions = ({ setShowLogin }: SuggestionsProps) => {
    const [data, setData] = useState<Anime[]>([])
    const [saved, setSaved] = useState<string[]>([])
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

    const handleClick = async () => {
        const postData = {
            token: Cookies.get('token'),
            ids: saved
        }
        const response = await fetch('http://localhost:3000/api/user/addAnime', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
        if (response.ok) {
            setShowLogin(false)
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="text-3xl mb-20">
                What anime do you like?
            </div>
            <div className="flex gap-10">
                {(data.map((d: Anime) => (<div key={d._id}><Card id={d._id} name={d.englishName} thumbnail={d.thumbnail} setSaved={setSaved} /></div>)))}
                {loading && Array.from({ length: 5 }, (_, i) => <div key={i}><Card id='null' name='Loading...' thumbnail='null' setSaved={setSaved} /></div>)}
            </div>
            <button className="rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 mt-20" onClick={handleClick}>
                <AiFillRightCircle className="text-5xl cursor-pointer" />
            </button>
        </div>
    )
}

export default Suggestions