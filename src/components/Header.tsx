import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-4 border-b border-b-gray-200 sticky content-center items-center md:flex-col md:justify-evenly md:border-b-0 md:border-r md:border-r-gray-200 bg-[#FDFDFD] md:w-64">
            <h1 className="text-3xl font-semibold">
                Cat <span className="text-stone-300">Browser</span>
            </h1>
            <Link className="outline-none px-3 text-2xl block md:hidden" to={"/cat-list"}>
                <FaBarsStaggered />
            </Link>
			<Navbar />
        </header>
    );
};

export default Header;
