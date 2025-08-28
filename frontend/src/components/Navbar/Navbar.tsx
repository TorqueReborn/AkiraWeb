import Search from "./components/Search/Search"

const Navbar = () => {
    return (
        <div className="flex items-center mx-[2vw] h-[10vh] gap-4 relative">
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Akira
            </h1>
            <div className="absolute right-0">
                <Search />
            </div>
        </div>
    )
}

export default Navbar