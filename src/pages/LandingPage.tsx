import { useState } from "react";
import { CatImageType } from "../interfaces/CatInterface";
import { getRandomCat } from "../api/axiosResponse";

const LandingPage = () => {
    const [randomCatImage, setRandomCatImage] = useState<CatImageType>();

    const randomCat = async () => {
        getRandomCat().then((data) => {
            setRandomCatImage(data.data[0]);
        });
    };
    return (
        <div className="flex flex-col gap-5 items-center content-center p-3 mt-4 md:h-full">
            <h2 className="text-center text-3xl font-semibold">Welcome!</h2>
            <p className="text-center ">
                Fell free to get a random image of a cat
            </p>
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-auto"
                onClick={randomCat}
            >
                Get Random Cat!!
            </button>
            {randomCatImage ? (
                <img src={randomCatImage.url} alt="random cat image" />
            ) : (
                ""
            )}
        </div>
    );
};

export default LandingPage;
