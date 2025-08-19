interface CardProps {
    name: string,
    thumbnail: string
}

const Card = ({name, thumbnail}: CardProps) => {
    return (
        <div className="relative w-56">
            <img src={thumbnail} alt="Anime Image" />
            <h2 className="w-full text-md line-clamp-2 text-center">{name}</h2>
        </div>
    )
}

export default Card