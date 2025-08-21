import { IoMdCheckmarkCircle } from "react-icons/io"

interface CardProps {
    name: string,
    thumbnail: string,
    genre: string
}

const Card = ({ name, thumbnail, genre }: CardProps) => {
    return (
        <div className='bg-gray-700 w-fit rounded'>
            <h1 className="bg-gray-900 pb-2 text-xl">{genre}</h1>
            <div className="relative">
                <img className='w-48 h-72 rounded-t' src={thumbnail} alt="Anime Image" />
                <IoMdCheckmarkCircle className="absolute top-0 right-0 text-white hidden bg-gray-800 h-8 w-8 p-1" />
            </div>
            <h1 className='p-2 italic font-medium w-48 line-clamp-1 text-center text-xl'>{name}</h1>
        </div>
    )
}

export default Card