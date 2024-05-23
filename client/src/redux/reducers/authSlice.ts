import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILogin, ISignUp } from "../../types/auth";
import setLocalStorage from "../../utils/setLocalStorage";

interface IAuth {
    isAuthenticated: boolean;
    isLoading: boolean;
    credentials: ILogin | ISignUp | null;
    message: string;
    success: boolean;
}

const initialState: IAuth = {
    isAuthenticated: false,
    isLoading: false,
    credentials: null,
    message: "",
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authRequest(state, action: PayloadAction<ISignUp | ILogin>) {
            state.credentials = action.payload;
        },
        authResponce(state, action) {
            state.message = action.payload.message;
            state.success = action.payload.success;
            setLocalStorage("token", action.payload.token);
            setLocalStorage("id", action.payload.id);
        },
        setAuthStatus(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
});

export const { authRequest, authResponce, setAuthStatus, setLoading } = authSlice.actions;

export default authSlice.reducer;
