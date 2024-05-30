import { createAction, createSlice } from "@reduxjs/toolkit";

import { reqestUrl } from "../constants/requestUrl";

const initialState: any = {
    currentUser: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const getUserData = createAction(reqestUrl.user);

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
