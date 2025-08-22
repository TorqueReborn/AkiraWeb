import { useState } from "react"
import { IoMdCheckmarkCircle } from "react-icons/io"

interface CardProps {
    name: string,
    thumbnail: string,
    genre: string
}

const Card = ({ name, thumbnail, genre }: CardProps) => {
    const [checked, setChecked] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
        setChecked(!checked)
    }

    return (
        <button className="focus:outline-none focus:scale-110 bg-gray-700 rounded" onClick={handleClick}>
            <h1 className="bg-gray-900 pb-4 text-xl">{genre}</h1>
            <div className="relative">
                <img className='w-48 h-72 rounded-t' src={thumbnail} alt="Anime Image" />
                <IoMdCheckmarkCircle className={`absolute top-0 right-0 text-white bg-gray-800 h-8 w-8 p-1 ${!checked && 'hidden'}`} />
            </div>
            <h1 className='p-2 italic font-medium w-48 line-clamp-1 text-center text-xl'>{name}</h1>
        </button>
    )
}

export default Card