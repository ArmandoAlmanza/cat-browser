import Stars from "./Stars";
import { FaInfo } from "react-icons/fa6";
interface RatingProps {
    title: string;
    stars: number;
    short: string;
}

const Rating = ({ title, stars, short }: RatingProps) => {
    return (
        <div className="relative">
            <p className="font-semibold font-second text-xl">{title}:</p>
            <div className="flex flex-row gap-3">
                <Stars stars={stars} />
            </div>
            <div className="group">
                <FaInfo className="absolute top-0 left-36 text-black bg-blue-300 rounded-full text-lg px-1 py-1 cursor-pointer z-10" />
                <p
                    className={`hidden group-hover:block group-hover:z-10 text-center bg-nav_bg text-white py-1 px-1 w-fit rounded-xl text-md absolute z-0 -top-10 transform cursor-pointer transition-opacity duration-300`}
                >
                    {stars < 3
                        ? "The cat is not to " + short
                        : "The cat is vey " + short}
                </p>
            </div>
        </div>
    );
};

export default Rating;
