import axios from "axios";
import getLocalStorage from "./utils/getLocalStorage";

const instance = axios.create();

instance.interceptors.request.use(
    (config) => {
        const token = getLocalStorage("token");
        if (config.headers && token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 403) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default instance;
