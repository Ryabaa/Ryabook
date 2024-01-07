import axiosInstance from "../../../service";
import getLocalStorage from "../../../utils/getLocalStorage";

import { reqestUrl } from "../../constants/requestUrl";

export const getUserListApi = async () => {
    const res = await axiosInstance.get(reqestUrl.allUsers);
    const sortedUsers = res.data.users
        ? res.data.users.sort((a: any, b: any) => a.username.localeCompare(b.username))
        : [];
    return { message: res.data.message, users: sortedUsers };
};

export const deleteUserApi = async (id: string) => {
    const res = await axiosInstance.delete(reqestUrl.delete + id);
    return { message: res.data.message };
};

export const getUserApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.user + id);
    return { ...res.data.user };
};
