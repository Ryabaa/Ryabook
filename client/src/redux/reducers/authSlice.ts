import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth, ILogin, ISignUp } from "../../types/auth";
import setLocalStorage from "../../utils/setLocalStorage";

const initialState: IAuth = {
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
    },
});

export const { authRequest, authResponce } = authSlice.actions;

export default authSlice.reducer;
