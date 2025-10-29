
interface CardProps {
  name: string,
  thumbnail: string
}

const Card = ({name, thumbnail}: CardProps) => {

  return (
    <div className="w-52 relative ml-8 flex-none">
        {<img src={thumbnail} alt={name} />}
        <div className="absolute bottom-3 -left-3 origin-left -rotate-90 line-clamp-1">
          {name}
        </div>
    </div>
  )
}

export default Card