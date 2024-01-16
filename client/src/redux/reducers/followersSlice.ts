import { createAction, createSlice } from "@reduxjs/toolkit";
import { reqestUrl } from "../constants/requestUrl";

interface IFollowersState {
    followers: Array<any>;
    following: Array<any>;
}

const initialState: IFollowersState = {
    followers: [],
    following: [],
};

const followersSlice = createSlice({
    name: "followers",
    initialState: initialState,
    reducers: {
        getFollowers: (state, action) => {
            state.followers = [...action.payload.followers];
        },
        getFollowing: (state, action) => {
            state.following = [...action.payload.following];
        },
        followUser: (state, action) => {},
        unfollowUser: (state, action) => {},
    },
});

export const getFollowersData = createAction(reqestUrl.followers);
export const getFollowingData = createAction(reqestUrl.following);

export const { getFollowers, getFollowing, followUser, unfollowUser } = followersSlice.actions;

export default followersSlice.reducer;
