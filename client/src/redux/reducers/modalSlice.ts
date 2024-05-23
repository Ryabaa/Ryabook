import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    followersModalIsOpen: false,
    notificationsModalIsOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        openFollowersModal: (state) => {
            state.followersModalIsOpen = true;
        },
        closeFollowersModal: (state) => {
            state.followersModalIsOpen = false;
        },
        openNotificationsModal: (state) => {
            state.notificationsModalIsOpen = true;
        },
        closeNotificationsModal: (state) => {
            state.notificationsModalIsOpen = false;
        },
    },
});

export const { openFollowersModal, closeFollowersModal, openNotificationsModal, closeNotificationsModal } =
    modalSlice.actions;

export default modalSlice.reducer;
