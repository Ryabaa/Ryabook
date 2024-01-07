import { combineReducers } from "@reduxjs/toolkit";

import getUsersSlice from "./userListSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
    users: getUsersSlice,
    auth: authSlice,
});

export default rootReducer;
