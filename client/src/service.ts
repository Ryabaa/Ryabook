import axios from "axios";

import getLocalStorage from "./utils/getLocalStorage";
import setLocalStorage from "./utils/setLocalStorage";

import { IUserAccount } from "./types/user";

const serverUrl = "http://localhost:4000";
const reqestUrl = {
    allUsers: serverUrl + "/user/list/",
    signUp: serverUrl + "/user/signup/",
    login: serverUrl + "/user/login/",
    delete: serverUrl + "/user/delete/",
};

axios.interceptors.request.use((req) => {
    const token = getLocalStorage("token");
    if (token) {
        req.headers!["Authorization"] = `Bearer ${token}`;
    }
    return req;
});

export const getAllUsers = async () => {
    const res = await axios.get(reqestUrl.allUsers);
    console.log(res.data);
    const sortedUsers = res.data.users
        ? res.data.users.sort((a: any, b: any) => a.username.localeCompare(b.username))
        : [];
    return { message: res.data.message, users: sortedUsers };
};

export const signUpUser = async (data: IUserAccount) => {
    return await axios.post(reqestUrl.signUp, data);
};

export const loginUser = async (data: IUserAccount) => {
    const res = await axios.post(reqestUrl.login, data);
    if (res.status === 201) {
        console.log(res.data);
        setLocalStorage("token", res.data.token);
        setLocalStorage("id", res.data.id);
    }
    return res;
};

export const deleteUser = async (id: string) => {
    await axios.delete(reqestUrl.delete + id);
};
