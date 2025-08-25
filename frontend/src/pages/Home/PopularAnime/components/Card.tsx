interface CardProps {
    title: string,
    thumbnail: string
}

const Card = ({title, thumbnail}: CardProps) => {
  return (
    <button className="flex relative w-48 h-72 ml-8 focus:outline-none focus:scale-105 rounded">
        <h1 className="flex absolute bottom-0 left-0 origin-left -rotate-90 -ml-3 -mb-3 w-54">
          <div className="ml-2 mr-3 font-bold text-amber-600">
            1
          </div>
          <div className="line-clamp-1">
            {title}
          </div>
        </h1>
        <img src={thumbnail} alt="Loading..." />
    </button>
  )
}

export default Card