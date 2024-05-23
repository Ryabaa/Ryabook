import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { store } from "./redux/store/store";
import { setAuthStatus } from "./redux/reducers/authSlice";

import getLocalStorage from "./utils/getLocalStorage";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getLocalStorage("token");
    if (token) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            store.dispatch(setAuthStatus(false));
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
