interface BannerProps {
    img: string
}

const Banner = ({ img }: BannerProps) => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 w-1/2">
                <h1 className="font-black text-5xl mb-4">Sakamoto Days</h1>
                <p className="line-clamp-3">This is the description of the anime which is a big sentence and will takes up most of the space and i am typing this to ensure that it would only takes up some space and not exceed the permitted space and it will ecenly spreadout and this was supposed to exceed three lines so iam typing even more </p>
                <button>Watch</button>
                <button>Detail</button>
            </div>
            <img src={img} alt="Anime Banner" />
        </div>
    )
}

export default Banner