import axiosInstance from "../../../service";
import getLocalStorage from "../../../utils/getLocalStorage";

import { reqestUrl } from "../../constants/requestUrl";

export const getUserListApi = async () => {
    const res = await axiosInstance.get(reqestUrl.userList);
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

export const getFollowersApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.followers + id);
    return { followers: res.data.followers };
};

export const getFollowingApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.following + id);
    return { following: res.data.following };
};

export const followUserApi = async (id: string) => {
    const req = { currentUserId: getLocalStorage("id") };
    const res = await axiosInstance.post(reqestUrl.followUser + id, req);
    return { message: res.data.message };
};

export const unfollowUserApi = async (id: string) => {
    const req = { currentUserId: getLocalStorage("id") };
    const res = await axiosInstance.post(reqestUrl.unfollowUser + id, req);
    return { message: res.data.message };
};
