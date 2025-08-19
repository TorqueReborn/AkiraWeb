interface SpotCardProps {
    title: string;
    description: string;
    image: string;
}

const SpotCard = ({title, description, image}: SpotCardProps) => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 ml-5 mb-10">
                <h1 className="font-bold text-5xl mb-3">{title}</h1>
                <p className="font-medium text-xl mb-6">{description}</p>
                <button className="p-4 bg-amber-950 rounded-full text-white cursor-pointer mr-3">Watch</button>
                <button className="p-4 border-2 rounded-full cursor-pointer">Detail</button>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default SpotCard