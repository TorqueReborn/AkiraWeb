interface CardProps {
  name: string,
  thumbnail: string
}

const Card = ({ name, thumbnail }: CardProps) => {
  return (
    <div>
      <div className="w-[10%] line-clamp-1 text-center">
        <img src={thumbnail} />
        {name}
      </div>
    </div>
  )
}

export default Card