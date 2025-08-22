import { useState } from "react"
import { IoMdCheckmarkCircle } from "react-icons/io"

interface CardProps {
    name: string,
    thumbnail: string,
    genre: string,
    setSelectedGenres: Function
}

const Card = ({ name, thumbnail, genre, setSelectedGenres }: CardProps) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
        setSelectedGenres((genres: string[]) => {
            if (genres.includes(genre)) {
                return genres.filter((g) => g !== genre)
            } else {
                return [...genres, genre]
            }
        })
    }

    return (
        <button className="focus:outline-none focus:scale-110 bg-gray-700 rounded" onClick={handleClick}>
            <div className="relative">
                <img className='w-48 h-72 rounded-t' src={thumbnail} alt="Anime Image" />
                <IoMdCheckmarkCircle className={`absolute top-0 right-0 text-white bg-gray-800 h-8 w-8 p-1 ${!selected && 'hidden'}`} />
            </div>
            <h1 className='p-2 w-48 line-clamp-1 text-center text-xl bg-gray-900'>{name}</h1>
        </button>
    )
}

export default Card