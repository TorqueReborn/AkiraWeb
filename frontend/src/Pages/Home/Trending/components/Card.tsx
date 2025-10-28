interface CardProps {
  name: string,
  thumbnail: string
}

const Card = ({name, thumbnail}: CardProps) => {
  return (
    <div>
        <img src={thumbnail} alt={name} />
        {name}
    </div>
  )
}

export default Card