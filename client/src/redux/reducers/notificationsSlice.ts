import { createAction, createSlice } from "@reduxjs/toolkit";
import { reqestUrl } from "../constants/requestUrl";

interface INotificationsState {
    notifications: Array<any>;
    unreadNotificationsCount: number;
    latestNotification: any;
}

const initialState: INotificationsState = {
    notifications: [],
    unreadNotificationsCount: 0,
    latestNotification: null,
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
        setNotification: (state, action) => {
            state.latestNotification = action.payload;
        },
        clearNotification: (state) => {
            state.latestNotification = null;
        },
    },
});

export const getNotificationsData = createAction(reqestUrl.getNotifications);
export const getUnreadNotificationsCountData = createAction(reqestUrl.getUnreadNotificationsCount);
export const markAllNotificationsAsReadData = createAction(reqestUrl.markAllNotificationsAsRead);

export const {
    setNotification,
    clearNotification,
    getNotifications,
    getUnreadNotificationsCount,
    markAllNotificationsAsRead,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
