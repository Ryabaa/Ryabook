import { combineReducers } from "@reduxjs/toolkit";

import getUsersSlice from "./userListSlice";
import authSlice from "./authSlice";
import modalSlice from "./modalSlice";
import followersSlice from "./followersSlice";
import loaderSlice from "./loaderSlice";

const rootReducer = combineReducers({
    users: getUsersSlice,
    auth: authSlice,
    modal: modalSlice,
    followers: followersSlice,
    loader: loaderSlice,
});

export default rootReducer;
