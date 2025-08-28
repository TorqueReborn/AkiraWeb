import { FaSearch } from "react-icons/fa"

const Search = () => {
    return (
        <div className="flex">
            <input type="text" placeholder="Search" className="outline-1 outline-gray-400 rounded-full px-4 py-2 mr-3" />
            <div tabIndex={0} className="bg-amber-300 p-4 rounded-full cursor-pointer">
                <FaSearch className="text-gray-600" />
            </div>
        </div>
    )
}

export default Search