const Spotlight = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 ml-5 mb-10">
                <h1 className="font-bold text-5xl mb-3">Sakamoto Days Part 2</h1>
                <p className="font-medium text-xl mb-6">Second Part of Sakamoto Days </p>
                <button className="p-4 bg-amber-950 rounded-full text-white cursor-pointer mr-3">Watch</button>
                <button className="p-4 border-2 rounded-full cursor-pointer">Detail</button>
            </div>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/184237-SBj6UJvIWAOg.jpg" alt="" />
        </div>
    )
}

export default Spotlight