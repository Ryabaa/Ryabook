import axiosInstance from "../../../service";
import getLocalStorage from "../../../utils/getLocalStorage";

import { reqestUrl } from "../../constants/requestUrl";

export const getPostListApi = async () => {
    const id = getLocalStorage("id");
    const res = await axiosInstance.get(reqestUrl.postList + id);
    console.log(res.data);
    return res.data;
};

export const uploadPostApi = async (data: FormData) => {
    const id = getLocalStorage("id");
    await axiosInstance.post(reqestUrl.uploadPost + id, data);
    return;
};

export const likePostApi = async (postId: string) => {
    const id = getLocalStorage("id");
    const req = { data: postId };
    const res = await axiosInstance.post(reqestUrl.likePost + id, req);
    console.log(res.data);
    return res.data;
};
