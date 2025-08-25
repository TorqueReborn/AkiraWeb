interface CardProps {
  number: number,
  title: string,
  thumbnail: string
}

const Card = ({ number, title, thumbnail }: CardProps) => {
  return (
    <button className="flex relative w-48 h-72 focus:outline-none focus:scale-105 rounded mx-6">
      <h1 className="flex absolute bottom-0 left-0 origin-left -rotate-90 w-54 -mb-4">
        <div className="ml-2 mr-3 font-bold text-amber-600">
          {number}
        </div>
        <div className="line-clamp-1 text-left">
          {title}
        </div>
      </h1>
      <img src={thumbnail} alt="Loading..." className="mx-4" />
    </button>
  )
}

export default Card