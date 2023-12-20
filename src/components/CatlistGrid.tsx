import { useEffect, useState } from "react";
import { getCatsGrid } from "../api/axiosResponse";
import { CatImageType } from "../interfaces/CatInterface";

const CatlistGrid = () => {
    const [catImages, setCatImages] = useState<CatImageType[]>([]);

    useEffect(() => {
        getCatsGrid().then((data) => {
            setCatImages(data.data);
        });
    }, []);

    return (
        <div className="max-w-4xl mx-auto flex flex-col content-center gap-5">
            <h1 className="text-4xl text-center font-semibold">Ira muchos gatos</h1>
            <div className="grid grid-cols-2 place-content-center place-items-center border border-gray-200 rounded-2xl gap-4 md:grid-cols-3 py-5 px-2">
                {catImages
                    ? catImages.map((catImage, i) => (
                          <img
                              className="min-h-48 max-h-48 w-11/12 max-w-fit md:min-w-48 md:max-w-48"
                              key={i}
                              src={catImage.url}
                              alt="image cat"
                          />
                      ))
                    : ""}
            </div>
        </div>
    );
};

export default CatlistGrid;
