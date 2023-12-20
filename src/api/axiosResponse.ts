import axios from "./axios";

export const getCatsImagesByBreed = async (
    breed_id: string,
    amount: number
) => {
    const res = await axios(
        "/images/search?breed_ids=" + breed_id + "&limit=" + amount
    );
    return res.data;
};

export const getCatsGrid = async () => axios.get("/images/search?limit=12");

export const getRandomCat = async () =>
    axios.get("https://api.thecatapi.com/v1/images/search");
