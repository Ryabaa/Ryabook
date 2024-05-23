import axiosInstance from "../../../service";
import getLocalStorage from "../../../utils/getLocalStorage";

import { reqestUrl } from "../../constants/requestUrl";

export const getNotificationsApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.getNotifications + id);
    return res.data;
};

export const markAllNotificationsAsReadApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.markAllNotificationsAsRead + id);
    return res.data;
};

export const getUnreadNotificationsCountApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.getUnreadNotificationsCount + id);
    return res.data;
};
