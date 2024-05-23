import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import authSlice from "./authSlice";
import modalSlice from "./modalSlice";
import followersSlice from "./followersSlice";
import notificationsSlice from "./notificationsSlice";

const rootReducer = combineReducers({
    user: userSlice,
    auth: authSlice,
    modal: modalSlice,
    followers: followersSlice,
    notifications: notificationsSlice,
});

export default rootReducer;
