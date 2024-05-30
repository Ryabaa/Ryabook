import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    modalIsOpen: false,
};

const avatarSlice = createSlice({
    name: "avatar",
    initialState,
    reducers: {
        openAvatarModal: (state) => {
            state.modalIsOpen = true;
        },
        closeAvatarModal: (state) => {
            state.modalIsOpen = false;
        },
        uploadAvatarRequest(state, action: PayloadAction<FormData>) {},
        uploadAvatarSuccess(state) {},
        removeAvatarRequest: (state) => {},
        removeAvatarSuccess: (state) => {},
    },
});

export const {
    openAvatarModal,
    closeAvatarModal,
    uploadAvatarRequest,
    uploadAvatarSuccess,
    removeAvatarRequest,
    removeAvatarSuccess,
} = avatarSlice.actions;

export default avatarSlice.reducer;
