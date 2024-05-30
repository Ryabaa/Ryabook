import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import authSlice from "./authSlice";
import followersSlice from "./followersSlice";
import notificationsSlice from "./notificationsSlice";
import avatarSlice from "./avatarSlice";

const rootReducer = combineReducers({
    user: userSlice,
    auth: authSlice,
    avatar: avatarSlice,
    followers: followersSlice,
    notifications: notificationsSlice,
});

export default rootReducer;
