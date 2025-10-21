interface CardProps {
  name: string,
  thumbnail: string
}

const Card = ({ name, thumbnail }: CardProps) => {
  return (
    <div className="w-[115px]">
      <div className="line-clamp-1 text-center">
        <img src={thumbnail} className="w-[115px] h-[161px]" />
        {name}
      </div>
    </div>
  )
}

export default Card