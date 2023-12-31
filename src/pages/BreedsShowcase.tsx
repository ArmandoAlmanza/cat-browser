import { useEffect, useState } from "react";
import { getBreeds } from "../api/axiosResponse";
import { CatBreed } from "../interfaces/CatInterface";
import CatCard from "../components/CatCard";
import { DEFAULT_CAT_BREED } from "../interfaces/mockData";

const BreedsShowcase = () => {
    const [selectedBreed, setSelectedBreed] = useState(DEFAULT_CAT_BREED);
    const [catBreeds, setCatBreeds] = useState<CatBreed[]>([]);

    useEffect(() => {
        getBreeds().then((data) => {
            setCatBreeds(data.data);
        });
    }, []);

    return (
        <div className="flex flex-col p-4 content-center items-center w-full gap-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold font-second">
                Know more about our fluffy friends!
            </h2>
            <div className="border border-gray-400 w-full rounded-2xl flex flex-col items-center content-center gap-5 p-5">
                <h3>Select a Cat Breed</h3>
                <div className="relative h-10 w-72 min-w-[200px]">
                    <select
                        className="peer h-full w-full rounded-[7px] border border-purple-400 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-purple-400 placeholder-shown:border-t-purple-200 empty:!bg-purple-900 focus:border-2 focus:border-purple-900focus:outline-0 disabled:border-0 disabled:bg-purple-50"
                        onChange={(e) =>
                            setSelectedBreed(
                                catBreeds[parseInt(e.target.value)]
                            )
                        }
                        defaultValue={0}
                        disabled={catBreeds.length === 0}
                    >
                        <option value={""}>-- Cat Breeds --</option>{" "}
                        {catBreeds.map((catBreed, i) => (
                            <option key={i} value={i}>
                                {catBreed.name}
                            </option>
                        ))}
                    </select>
                </div>
                <CatCard {...selectedBreed} />
            </div>
        </div>
    );
};

export default BreedsShowcase;
