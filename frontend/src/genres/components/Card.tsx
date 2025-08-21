interface CardProps {
    name: string,
    thumbnail: string
}

const Card = ({ name, thumbnail }: CardProps) => {
    return (
        <div className='bg-gray-700 w-fit'>
            <img className='w-48 h-72' src={thumbnail} alt="Anime Image" />
            <h1 className='p-2 italic font-medium w-48 line-clamp-1 text-center text-xl'>{name}</h1>
        </div>
    )
}

export default Card