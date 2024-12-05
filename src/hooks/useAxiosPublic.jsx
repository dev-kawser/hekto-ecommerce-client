import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bazaarnest-server.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
})

export default axiosPublic;