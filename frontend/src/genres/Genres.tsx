import Card from './components/Card'
import { useState } from 'react'

const Genres = () => {
    const [selectedGenres, setSelectedGenres] = useState([])

    return (
        <div>
            <Card genre='Soaikou' setSelectedGenres={setSelectedGenres} />
            <Card genre='Something' setSelectedGenres={setSelectedGenres} />
            <button onClick={() => console.log(selectedGenres)}>
                Check
            </button>
        </div>
    )
}

export default Genres