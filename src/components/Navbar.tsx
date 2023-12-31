import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";

interface NavProps {
    navOpened: boolean;
    setNavOpened: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ navOpened, setNavOpened }: NavProps) => {
    const displayState = navOpened ? "top-0" : "-top-full";
    return (
        <nav
            className={`flex flex-col gap-5 items-start -top-full left-0 text-white z-50 w-full fixed h-full bg-nav_bg text-center backdrop:blur-lg transition-[top] duration-500 px-7 py-10 sm:hidden ${displayState} md:top-0 md:bg-transparent md:relative md:flex md:flex-col md:gap-5 md:justify-between font-second md:visible md:h-auto`}
        >
            <button
                onClick={() => {
                    setNavOpened(false);
                }}
                className="rounded-full py-1 text-white bg-black px-1 outline-none absolute cursor-pointer top-4 right-6 text-xl self-end transform md:hidden"
            >
                <FaTimes />
            </button>
            <span className="mx-auto mb-4 relative text-3xl font-semibold after:content-[''] after:w-20 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-2 text-white md:hidden">
                Menu
            </span>
            <Link
                className="relative mx-auto text-gray-200 font-semibold text-xl transition-colors duration-300 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-2 after:transition-[width] after:duration-300 hover:text-white hover:after:w-5 md:after:bg-black  md:text-black md:hover:text-purple-500"
                to="/"
                onClick={() => setNavOpened(false)}
            >
                Home
            </Link>
            <Link
                className="relative mx-auto text-gray-200 font-semibold text-xl transition-colors duration-300 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-2 after:transition-[width] after:duration-300 hover:text-white hover:after:w-5 md:after:bg-black  md:text-black md:hover:text-purple-500"
                to="/breeds"
                onClick={() => setNavOpened(false)}
            >
                Breed List
            </Link>
            <Link
                className="relative mx-auto text-gray-200 font-semibold text-xl transition-colors duration-300 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-2 after:transition-[width] after:duration-300 hover:text-white hover:after:w-5 md:after:bg-black  md:text-black md:hover:text-purple-500"
                to="/feli"
                onClick={() => setNavOpened(false)}
            >
                Feli
            </Link>
        </nav>
    );
};

export default Navbar;
