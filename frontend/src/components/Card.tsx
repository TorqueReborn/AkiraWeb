interface CardProps {
    name: string,
    thumbnail: string
}

const Card = ({ name, thumbnail }: CardProps) => {
    return (
        <div className="ml-10 w-56 h-72">
            <div className="relative w-72 h-full flex">
                <div className="bg-amber-500 absolute -bottom-3 -left-3 origin-left -rotate-90 line-clamp-1 w-full">
                    <h2 className="ml-3 mr-2">{name}</h2>
                </div>
                <img src={thumbnail} alt="Anime Image" className="w-56 h-72" />
            </div>
        </div>
    )
}

export default Card