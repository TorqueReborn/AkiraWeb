import { useNavigate } from "react-router-dom"

interface BannerProps {
    id: string,
    title: string,
    img: string,
    description: string
}

const Banner = ({ id, title, img, description }: BannerProps) => {
    const navigate = useNavigate()

    const handleWatch = () => {
        navigate(`/${id}/1`)
    }

    return (
        <div className="relative h-[75vh]">
            <div className="absolute w-full h-full bg-gradient-to-r from-gray-900 to-gray-100/0" />
            <div className="absolute w-full h-full bg-gradient-to-t from-gray-900 to-gray-100/0" />
            <div className="absolute bottom-0 w-1/2 m-20">
                <h1 className="font-bold text-5xl mb-4">{title}</h1>
                <p className="font-medium line-clamp-3" dangerouslySetInnerHTML={{ __html: description }} />
                <button className="px-4 py-2 mx-2 my-4 text-gray-950 bg-amber-300 rounded-full cursor-pointer" onClick={handleWatch}>Watch</button>
                <button className="px-4 py-2 mx-2 my-4 text-gray-950 bg-amber-300 rounded-full cursor-pointer">Details</button>
            </div>
            <img src={img} alt="Anime Banner" className="h-full w-full object-cover" />
        </div>
    )
}

export default Banner