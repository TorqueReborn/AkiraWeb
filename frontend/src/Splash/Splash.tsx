import Cookies from 'js-cookie'
import { MdKeyboardArrowRight } from "react-icons/md";

interface SplashInterface {
  setSplashShown: Function
}

const Splash = ({ setSplashShown }: SplashInterface) => {
  const handleClick = () => {
    setSplashShown(true)
    Cookies.set("splashShown", "true")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-4">
        <img src="/logo.png" width={100} />
        <div className="text-6xl mt-3 ml-4 font-bold bg-linear-to-r from-indigo-800 via-blue-400 to-purple-400 text-transparent bg-clip-text">
          Akira
        </div>
      </div>
      <div className="mt-32 rounded-full bg-white" tabIndex={0}>
        <MdKeyboardArrowRight size={45} className="text-black " onClick={handleClick} />
      </div>
    </div>
  )
}

export default Splash