interface CardProps {
    title: string,
    thumbnail: string
}

const Card = ({title, thumbnail}: CardProps) => {
  return (
    <div>
        <img src={thumbnail} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default Card