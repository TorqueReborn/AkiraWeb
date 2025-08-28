import Search from "./components/Search/Search"

const Navbar = () => {
    return (
        <div className="flex items-center mx-[2vw] h-[12vh] gap-4 relative">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-500/75 to-amber-400/50 ml-3">
                Akira
            </h1>
            <div className="absolute right-0">
                <Search />
            </div>
        </div>
    )
}

export default Navbar