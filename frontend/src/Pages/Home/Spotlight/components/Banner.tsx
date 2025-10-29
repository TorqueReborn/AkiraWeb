interface BannerProps {
    name: string,
    banner: string
}

const Banner = ({ name, banner }: BannerProps) => {
    return (
        <div className="h-72 relative">
            <h2 className="absolute bottom-10 left-10 text-2xl font-black right-10">{name}</h2>
            <img className="h-full w-full object-cover" src={banner} alt="Anime Banner" />
        </div>
    )
}

export default Banner