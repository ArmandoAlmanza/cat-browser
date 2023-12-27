import React from "react";
import { CatBreed } from "../interfaces/CatInterface";

import Rating from "./Rating";

const CatCard = ({
    name,
    temperament,
    origin,
    description,
    alt_names,
    adaptability,
    affection_level,
    child_friendly,
    dog_friendly,
    energy_level,
    grooming,
    social_needs,
    wikipedia_url,
    image,
}: CatBreed) => {
    return (
        <article className="flex flex-col gap-3 justify-center bg-white w-full p-5 rounded-2xl">
            <img
                className="min-h-48 max-h-48 w-11/12 max-w-fit md:min-w-48 md:max-w-48 mx-auto"
                src={image.url}
                alt="image cat"
            />
            <h1 className="relative text-xl">
                {name}{" "}
                <span className="font-second text-gray-400">({origin})</span>
                <p className="text-sm italic">{alt_names} </p>
            </h1>

            <div>
                <p>Temperament:</p>
                <div className="grid grid-cols-2">
                    {temperament.split(",").map((item, i) => (
                        <React.Fragment key={i}>
                            <span key={i} className="text-blue-400">
                                {item}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="flex flex-col mx-auto content-center md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 md:mx-0">
                <Rating
                    title="Affection Level"
                    stars={affection_level}
                    short="affective"
                />
                <Rating
                    title="Adaptability"
                    stars={adaptability}
                    short="adaptable"
                />
                <Rating
                    title="Child Friendly"
                    stars={child_friendly}
                    short="child friendly"
                />
                <Rating
                    title="Dog Friendly"
                    stars={dog_friendly}
                    short="dog friendly"
                />
                <Rating
                    title="Energy Level"
                    stars={energy_level}
                    short="energetic"
                />
                <Rating title="Grooming" stars={grooming} short="groomy" />{" "}
                <Rating
                    title="Social Needs"
                    stars={social_needs}
                    short="social"
                />
            </div>

            <p className="text-justify">{description}</p>
            <a
                className="inline-block w-fit underline italic text-lg text-blue-400 transition-colors hover:text-purple-600 duration-300"
                href={wikipedia_url}
                target="_blank"
            >
                More info
            </a>
        </article>
    );
};

export default CatCard;
