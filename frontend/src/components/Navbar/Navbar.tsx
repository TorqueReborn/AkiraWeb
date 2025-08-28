import { VscThreeBars } from "react-icons/vsc"
import Search from "./components/Search/Search"

const Navbar = () => {
    return (
        <div className="flex items-center mx-[2vw] h-[12vh] gap-4 relative">
            <div tabIndex={0} className="cursor-pointer">
                <VscThreeBars size={38} />
            </div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Akira
            </h1>
            <div className="absolute right-0">
                <Search />
            </div>
        </div>
    )
}

export default Navbar