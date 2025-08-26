interface BannerProps {
    img: string
}

const Banner = ({ img }: BannerProps) => {
    return (
        <div className="relative h-2/3 bg-white">
            <div className="absolute w-full h-full bg-gradient-to-r from-gray-900 to-gray-100/0" />
            <div className="absolute w-full h-full bg-gradient-to-t from-gray-900 to-gray-100/0" />
            <div className="absolute bottom-0 w-1/2 m-20">
                <h1 className="font-bold text-5xl mb-4">Sakamoto Days</h1>
                <p className="font-medium line-clamp-3">This is the description of the anime which is a big sentence and will takes up most of the space and i am typing this to ensure that it would only takes up some space and not exceed the permitted space and it will ecenly spreadout and this was supposed to exceed three lines so iam typing even more </p>
                <button className="px-4 py-2 mx-2 my-4 text-gray-950 bg-amber-300 rounded-full cursor-pointer">Watch</button>
                <button className="px-4 py-2 mx-2 my-4 text-gray-950 bg-amber-300 rounded-full cursor-pointer">Details</button>
            </div>
            <img src={img} alt="Anime Banner" className="h-full w-full object-cover" />
        </div>
    )
}

export default Banner