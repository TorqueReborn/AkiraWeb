import { useNavigate } from "react-router-dom"

interface CardProps {
  id: string,
  name: string,
  thumbnail: string
}

const Card = ({ id, name, thumbnail }: CardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/watch/${id}/1`)
  }

  return (
    <div className="w-48 shrink-0" onClick={handleClick}>
      <div className="line-clamp-1 text-center">
        <img src={thumbnail} className="w-48 h-72" />
        {name}
      </div>
    </div>
  )
}

export default Card