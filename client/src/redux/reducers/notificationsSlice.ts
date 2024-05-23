import { createAction, createSlice } from "@reduxjs/toolkit";
import { reqestUrl } from "../constants/requestUrl";

interface INotificationsState {
    notifications: Array<any>;
    unreadNotificationsCount: number;
}

const initialState: INotificationsState = {
    notifications: [],
    unreadNotificationsCount: 0,
};

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: initialState,
    reducers: {
        getNotifications: (state, action) => {
            state.notifications = [...action.payload];
        },
        markAllNotificationsAsRead: (state, action) => {
            state.unreadNotificationsCount = 0;
        },
        getUnreadNotificationsCount: (state, action) => {
            state.unreadNotificationsCount = action.payload;
        },
    },
});

export const getNotificationsData = createAction(reqestUrl.getNotifications);
export const getUnreadNotificationsCountData = createAction(reqestUrl.getUnreadNotificationsCount);
export const markAllNotificationsAsReadData = createAction(reqestUrl.markAllNotificationsAsRead);

export const { getNotifications, getUnreadNotificationsCount, markAllNotificationsAsRead } =
    notificationsSlice.actions;

export default notificationsSlice.reducer;
