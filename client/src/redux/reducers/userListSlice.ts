import { createAction, createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../types/user";
import { reqestUrl } from "../constants/requestUrl";

interface IUserListState {
    currentUser: IUser | null;
    list: Array<IUser>;
    message: string;
}

const initialState: IUserListState = {
    currentUser: { username: "", avatar: "", email: "" },
    list: [],
    message: "",
};

const getUserListSlice = createSlice({
    name: "userList",
    initialState,
    reducers: {
        updateUserList: (state, action) => {
            state.list = [...action.payload.users];
            state.message = action.payload.message;
        },
        getUser: (state, action) => {
            state.currentUser = action.payload;
        },
        deleteUser: (state, action) => {},
    },
});

export const getUserList = createAction(reqestUrl.userList);
export const getUserData = createAction(reqestUrl.user);

export const { updateUserList, deleteUser, getUser } = getUserListSlice.actions;

export default getUserListSlice.reducer;
