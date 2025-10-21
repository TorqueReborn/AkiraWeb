interface CardProps {
    name: string, 
    thumbnail: string
}

const Card = ({name, thumbnail}: CardProps) => {
  return (
    <div>
        <img src={thumbnail}/>
        {name}
    </div>
  )
}

export default Card