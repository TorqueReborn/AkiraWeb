import Card from "./components/Card"

const Genres = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="text-3xl mb-10">
                What anime do you like?
            </div>
            <div className="flex gap-10">
                <Card name="One Piece" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg?w=250" genre="Shonen" />
                <Card name="Princess Jellyfish" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx8129-VasAsXbiixR1.jpg?w=250" genre="Josei" />
                <Card name="Nmeneko" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx186313-29gCf3CWJu1n.jpg?w=250" genre="Comedy"/>
                <Card name="Berserk" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21560-6iifjdssfebJ.jpg?w=250" genre="Seinen " />
                <Card name="Sailor Moon" thumbnail="https://wp.youtube-anime.com/s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx530-I0XN6WzeBtAg.jpg?w=250" genre="Shoujo" />
            </div>
        </div>
    )
}

export default Genres