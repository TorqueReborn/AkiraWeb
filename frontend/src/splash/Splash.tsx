import Cookies from "js-cookie";
import { AiFillRightCircle } from "react-icons/ai"

interface SplashProps {
    setSplashSeen: Function
}

const Splash = ({ setSplashSeen }: SplashProps) => {

    const handleClick = () => {
        Cookies.set('splashSeen', 'true')
        setSplashSeen(true)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Akira
            </h1>
            <p className="mb-5">By Ghost Reborn!!!</p>
            <button className="rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400" onClick={handleClick}>
                <AiFillRightCircle className="text-5xl cursor-pointer" />
            </button>
        </div>
    )
}

export default Splash