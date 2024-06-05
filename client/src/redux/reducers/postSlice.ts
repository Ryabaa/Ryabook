import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    currentPost: {},
    postList: [],
    postModalIsOpen: false,
    postCreatorModalIsOpen: false,
    postCreatorPopUpIsOpen: false,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        openPostModal: (state) => {
            state.postModalIsOpen = true;
        },
        closePostModal: (state) => {
            state.postModalIsOpen = false;
        },
        openPostCreatorModal: (state) => {
            state.postCreatorModalIsOpen = true;
        },
        closePostCreatorModal: (state) => {
            state.postCreatorModalIsOpen = false;
        },
        openPostCreatorPopUp: (state) => {
            state.postCreatorPopUpIsOpen = true;
        },
        closePostCreatorPopUp: (state) => {
            state.postCreatorPopUpIsOpen = false;
        },
        uploadPostRequest(state, action: PayloadAction<FormData>) {},
        uploadPostSuccess(state) {},
        getPostListRequest(state) {},
        getPostListSuccess(state, action) {
            state.postList = action.payload;
        },
        getCurrentPost(state, action) {
            state.currentPost = action.payload;
        },
        likePostRequest(state, action: PayloadAction<string>) {},
        likePostSuccess(state, action: PayloadAction<any>) {
            state.currentPost = action.payload;
        },
    },
});

export const {
    openPostModal,
    closePostModal,
    openPostCreatorModal,
    closePostCreatorModal,
    openPostCreatorPopUp,
    closePostCreatorPopUp,
    uploadPostRequest,
    uploadPostSuccess,
    getPostListRequest,
    getPostListSuccess,
    getCurrentPost,
    likePostRequest,
    likePostSuccess,
} = postSlice.actions;

export default postSlice.reducer;
