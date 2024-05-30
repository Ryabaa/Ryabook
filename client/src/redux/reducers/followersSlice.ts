import { createAction, createSlice } from "@reduxjs/toolkit";
import { reqestUrl } from "../constants/requestUrl";

interface IFollowersState {
    modalIsOpen: boolean;
    followers: Array<any>;
    following: Array<any>;
}

const initialState: IFollowersState = {
    modalIsOpen: false,
    followers: [],
    following: [],
};

const followersSlice = createSlice({
    name: "followers",
    initialState: initialState,
    reducers: {
        openFollowersModal: (state) => {
            state.modalIsOpen = true;
        },
        closeFollowersModal: (state) => {
            state.modalIsOpen = false;
        },
        getFollowers: (state, action) => {
            state.followers = [...action.payload];
        },
        getFollowing: (state, action) => {
            state.following = [...action.payload];
        },
        followUserRequest(state, action) {},
        followUserResponse(state, action) {
            state.followers = action.payload.followers;
            state.following = action.payload.following;
        },
        unfollowUserRequest(state, action) {},
        unfollowUserResponse(state, action) {
            state.followers = action.payload.followers;
            state.following = action.payload.following;
        },
        deleteFollowerRequest(state, action) {},
        deleteFollowerResponse(state, action) {
            state.followers = action.payload.followers;
            state.following = action.payload.following;
        },
    },
});

export const getFollowersData = createAction(reqestUrl.followers);
export const getFollowingData = createAction(reqestUrl.following);

export const {
    getFollowers,
    getFollowing,
    followUserRequest,
    followUserResponse,
    unfollowUserRequest,
    unfollowUserResponse,
    deleteFollowerRequest,
    deleteFollowerResponse,
    openFollowersModal,
    closeFollowersModal,
} = followersSlice.actions;

export default followersSlice.reducer;
