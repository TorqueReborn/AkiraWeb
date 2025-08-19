import { AiFillRightCircle } from "react-icons/ai"

const Splash = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Akira
            </h1>
            <p>By Ghost Reborn!!!</p>
            <AiFillRightCircle className="text-5xl mt-5 cursor-pointer"/>
        </div>
    )
}

export default Splash