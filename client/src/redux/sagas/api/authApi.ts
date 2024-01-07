import axiosInstance from "../../../service";

import { reqestUrl } from "../../constants/requestUrl";
import { ILogin, ISignUp } from "../../../types/auth";

export const signUpApi = async (data: ISignUp) => {
    const res = await axiosInstance.post(reqestUrl.signUp, data);
    return res.data;
};

export const loginApi = async (data: ILogin) => {
    const res = await axiosInstance.post(reqestUrl.login, data);
    return res.data;
};
