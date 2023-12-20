import axios from "./axios";

export const getCatsGrid = async () => axios.get("/images/search?limit=12");

export const getRandomCat = async () =>
    axios.get("https://api.thecatapi.com/v1/images/search");
