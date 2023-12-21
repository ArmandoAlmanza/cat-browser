import { useEffect, useState } from "react";
import { CatBreed } from "../interfaces/CatInterface";
import { getBreedData } from "../api/axiosResponse";

interface CatProps {
    catId: string;
}

const CatCard = ({ catId }: CatProps) => {
    const [catBreed, setCatBreed] = useState<CatBreed>();

    useEffect(() => {
        getBreedData(catId).then((data) => {
            setCatBreed(data.data);
            console.log(data.data);
        });
    }, [catId]);
    return (
        <article className="flex flex-col justify-center">
            <h1>{catId}</h1>
        </article>
    );
};

export default CatCard;
