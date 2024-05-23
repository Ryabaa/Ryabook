import axiosInstance from "../../../service";
import getLocalStorage from "../../../utils/getLocalStorage";

import { reqestUrl } from "../../constants/requestUrl";

export const getUserApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.user + id);
    return res.data;
};

export const getFollowersApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.followers + id);
    return res.data;
};

export const getFollowingApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.following + id);
    return res.data;
};

export const followUserApi = async (id: string) => {
    const req = { currentUserId: getLocalStorage("id") };
    const res = await axiosInstance.post(reqestUrl.followUser + id, req);
    return res.data;
};

export const unfollowUserApi = async (id: string) => {
    const req = { currentUserId: getLocalStorage("id") };
    const res = await axiosInstance.post(reqestUrl.unfollowUser + id, req);
    return res.data;
};

export const deleteFollowerApi = async (id: string) => {
    const req = { currentUserId: getLocalStorage("id") };
    const res = await axiosInstance.post(reqestUrl.deleteFollower + id, req);
    return res.data;
};
