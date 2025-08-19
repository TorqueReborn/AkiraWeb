import { useEffect, useState } from "react";
import { AiFillRightCircle } from "react-icons/ai"

const Splash = () => {
    const [showSplash, setShowSplash] = useState(false);

    useEffect(() => {
        const splashSeen = localStorage.getItem("splashSeen");
        if (!splashSeen) {
            setShowSplash(true);
        }
    }, []);

    const handleClick = () => {
        localStorage.setItem("splashSeen", "true");
        window.location.reload();
    }
    if (!showSplash) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Akira
            </h1>
            <p className="mb-5">By Ghost Reborn!!!</p>
            <button onClick={handleClick}>
                <AiFillRightCircle className="text-5xl cursor-pointer"/>
            </button>
        </div>
    )
}

export default Splash