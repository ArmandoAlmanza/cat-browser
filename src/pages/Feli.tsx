import { useState } from "react";

const Feli = () => {
    const [clicks, setClicks] = useState(0);
    const [hate, setHate] = useState(false);
    const handleButtonClick = () => {
        setClicks(clicks + 1);
    };

    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < clicks; i++) {
            hearts.push(<span key={i}>❤️</span>);
        }
        return hearts;
    };
    return (
        <div className="max-w-5xl md:mx-auto p-4 md:border md:border-black gap-5 grid md:grid-cols-2 place-items-center m-4 mx-auto">
            <h1 className="text-xl font-bold max-w-max mx-auto">
                {!hate ? "Say Hi to Feli c:" : "Why you hate him? :c?"}
            </h1>
            <div className="md:row-span-2 w-56 md:w-96">
                <img src={hate ? "/nojado.jpg" : "/feli.jpg"} alt="Feli" />
            </div>

            <div className="flex flex-col gap-4">
                <button
                    className="flex justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple-200 text-xl mx-auto max-w-80"
                    onClick={() => setHate(!hate)}
                >
                    {!hate ? "You hate him?" : "You love it now?"}
                </button>
                {hate ? (
                    ""
                ) : (
                    <button
                        className="flex justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple-200 text-xl mx-auto max-w-80"
                        onClick={handleButtonClick}
                    >
                        Give Love
                    </button>
                )}
                {!hate ? <div>{renderHearts()}</div> : ""}
            </div>
        </div>
    );
};

export default Feli;
