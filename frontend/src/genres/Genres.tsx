import { useState } from 'react'
import Card from './components/Card'
import { AiFillRightCircle } from 'react-icons/ai'

const Genres = () => {
    const [selectedGenres, setSelectedGenres] = useState([])

    const handleClick = async () => {
        try {
            console.log(selectedGenres)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="text-3xl mb-20">
                What anime do you like?
            </div>
            <div className="flex gap-10">
                <Card name="One Piece" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg?w=250" genre="Shonen" setSelectedGenres={setSelectedGenres} />
                <Card name="Princess Jellyfish" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx8129-VasAsXbiixR1.jpg?w=250" genre="Josei" setSelectedGenres={setSelectedGenres} />
                <Card name="Nmeneko" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx186313-29gCf3CWJu1n.jpg?w=250" genre="Comedy" setSelectedGenres={setSelectedGenres} />
                <Card name="Berserk" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21560-6iifjdssfebJ.jpg?w=250" genre="Seinen " setSelectedGenres={setSelectedGenres} />
                <Card name="Sailor Moon" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx530-I0XN6WzeBtAg.jpg?w=250" genre="Shoujo" setSelectedGenres={setSelectedGenres} />
            </div>
            <button className="rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 mt-20" onClick={handleClick}>
                <AiFillRightCircle className="text-5xl cursor-pointer" />
            </button>
        </div>
    )
}

export default Genres