import axios from "./axios";

export const getCatsGrid = async () => axios.get("/images/search?limit=12");

export const getRandomCat = async () => axios.get("/images/search");

export const getBreeds = async () => axios.get("/breeds/");

export const getBreedData = async (id: string) => axios.get("/breeds/" + id);
