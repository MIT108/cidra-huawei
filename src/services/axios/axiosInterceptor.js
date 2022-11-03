
import axios from "axios";
import { getAccessToken } from "services/sessionStorage";

const axiosInstance = axios.create({
    baseURL: "http://119.13.107.181:5000",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});


axiosInstance.interceptors.request.use( async (config) => {
    let token = await getAccessToken()

    config.headers.Authorization = `Bearer ${token}`;

    return config;
}, error => Promise.reject(error));

export default axiosInstance;