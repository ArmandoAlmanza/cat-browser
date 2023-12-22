import React from "react";
import { FaStar } from "react-icons/fa6";
interface starsProps {
    stars: number;
}

const Stars = ({ stars }: starsProps) => {
    return (
        <>
            {[...Array(stars)].map((_, i) => (
                <React.Fragment key={i}>
                    <FaStar
                        className={
                            stars < 3 ? "text-blue-400" : "text-violet-400"
                        }
                    />
                </React.Fragment>
            ))}
        </>
    );
};

export default Stars;
