import { useState } from "react"

interface CardProps {
    genre: string,
    setSelectedGenres: Function
}

const Card = ({ genre, setSelectedGenres }: CardProps) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelectedGenres((genres: string[]) => {
            if (genres.includes(genre)) {
                return genres.filter((g) => g !== genre)
            } else {
                return [...genres, genre]
            }
        })
    }

    return (
        <div onClick={handleClick} className={`${selected ? 'hidden' : ''}`}>
            {genre}
        </div>
    )
}

export default Card