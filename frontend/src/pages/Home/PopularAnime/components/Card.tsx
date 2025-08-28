import { useNavigate } from "react-router-dom"

interface CardProps {
  id: string,
  number: number,
  title: string,
  thumbnail: string
}

const handleClick = () => {
  console.log("clicked")
}

const Card = ({ id, number, title, thumbnail }: CardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${id}`)
  }

  return (
    <button tabIndex={-1} className="flex relative w-48 h-72 mx-6 mb-4 p-1" onClick={handleClick}>
      <h1 className="flex absolute bottom-2 left-0 origin-left -rotate-90 w-54 -mb-4">
        <div className="ml-2 mr-3 font-bold text-amber-600">
          {number}
        </div>
        <div className="line-clamp-1 text-left">
          {title}
        </div>
      </h1>
      <img src={thumbnail} alt="Loading..." tabIndex={0} className="mx-4 m-2 focus:outline-none focus:scale-105 rounded focus:ring-2" />
    </button>
  )
}

export default Card