import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="hidden md:flex md:flex-col md:gap-5 md:justify-between">
            <Link
                className="text-2xl hover:text-purple-300 transition-colors duration-300"
                to="/"
            >
                Home
            </Link>
            <Link
                className="text-2xl hover:text-purple-300 transition-colors duration-300"
                to="/cat-list"
            >
                Cat List
            </Link>
        </nav>
    );
};

export default Navbar;
