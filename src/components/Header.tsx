import { FaBarsStaggered } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";

const Header = () => {
    const screenSize = useScreenSize();
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <>
            <header className="flex flex-row justify-between p-4 border-b border-b-gray-200 sticky content-center items-center md:flex-col md:justify-evenly md:border-b-0 md:border-r md:border-r-gray-200 bg-body md:w-64">
                <h1 className="text-3xl font-semibold">
                    Cat <span className="text-stone-400 md:text-stone">Browser</span>
                </h1>
                <button
                    onClick={() => {
                        setMenuOpened(!menuOpened);
                    }}
                    className="py-1 text-white bg-black px-1 outline-none text-xl block md:hidden"
                >
                    <FaBarsStaggered />
                </button>
                <Navbar navOpened={menuOpened} setNavOpened={setMenuOpened} />
                {screenSize.width >= 768 ? <Footer /> : ""}
            </header>
        </>
    );
};

export default Header;
