import { useState } from "react"
import { IoMdCheckmarkCircle } from "react-icons/io"

interface CardProps {
    name: string,
    thumbnail: string
}

const Card = ({ name, thumbnail }: CardProps) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <button className="w-48 h-82 relative focus:outline-none focus:scale-110 rounded" onClick={handleClick}>
            <div className="w-48 h-72 absolute top-0">
                <img src={thumbnail} alt="‎ " className="w-full h-full" />
                <IoMdCheckmarkCircle className={`absolute top-0 right-0 text-white bg-gray-800 h-8 w-8 p-1 ${!selected && 'hidden'}`} />
            </div>
            <div className="absolute bottom-0">
                <h1 className='w-48 line-clamp-1 text-center text-xl bg-gray-900'>{name}</h1>
            </div>
        </button>
    )
}

export default Card