import { FaGithub, FaInstagram, FaX } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex flex-col p-4 gap-5">
            <div className="flex flex-col content-center items-center gap-3">
                <h2 className="text-xl">
                    Made by{" "}
                    <span className="text-2xl font-semibold text-purple-300">
                        Armando Almanza
                    </span>
                </h2>
                <nav className="flex flex-row justify-between gap-3">
                    <a href="https://github.com/ArmandoAlmanza">
                        <FaGithub />
                    </a>
                    <a href="https://github.com/ArmandoAlmanza">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/ArmandoAlmanza">
                        <FaX />
                    </a>
                </nav>
            </div>
            <p>
                All the credits of the API and cats info to{" "}
                <a
                    className="text-stone-500 font-semibold"
                    href="https://thecatapi.com/"
                    target="_blank"
                >
                    The Cat API
                </a>
            </p>
        </footer>
    );
};

export default Footer;
