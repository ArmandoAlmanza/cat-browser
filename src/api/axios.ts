import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "Content-Type": "application/json multipart/form-data",
        "x-api-key":
            "live_kVJaH5DCPL4tcxMGQAsjNS8hjektcT2FFMCPOFRpVAqJ5msGaLcgF1wA4Hd00RJL",
    },
});

export default axiosInstance;
