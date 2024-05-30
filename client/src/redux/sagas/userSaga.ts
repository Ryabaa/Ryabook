import { all, call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    deleteFollowerApi,
    followUserApi,
    getFollowersApi,
    getFollowingApi,
    getUserApi,
    removeAvatarApi,
    unfollowUserApi,
    uploadAvatarApi,
} from "./api/userApi";
import { getUser, getUserData } from "../reducers/userSlice";
import {
    getFollowers,
    getFollowersData,
    getFollowing,
    getFollowingData,
    followUserRequest,
    followUserResponse,
    unfollowUserRequest,
    unfollowUserResponse,
    deleteFollowerResponse,
    deleteFollowerRequest,
} from "../reducers/followersSlice";
import {
    removeAvatarRequest,
    removeAvatarSuccess,
    uploadAvatarRequest,
    uploadAvatarSuccess,
} from "../reducers/avatarSlice";

export function* getUserSaga(): any {
    try {
        const res = yield getUserApi().then((res) => res);
        yield put(getUser(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* getFollowersSaga(): any {
    try {
        const res = yield getFollowersApi().then((res) => res);
        yield put(getFollowers(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* getFollowingSaga(): any {
    try {
        const res = yield getFollowingApi().then((res: any) => res);
        yield put(getFollowing(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

function* followUserSaga(action: PayloadAction<any>): any {
    try {
        const res = yield call(followUserApi, action.payload.id);
        yield put(followUserResponse(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

function* unfollowUserSaga(action: PayloadAction<any>): any {
    try {
        const res = yield call(unfollowUserApi, action.payload.id);
        yield put(unfollowUserResponse(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

function* deleteFollowerSaga(action: PayloadAction<any>): any {
    try {
        const res = yield call(deleteFollowerApi, action.payload.id);
        yield put(deleteFollowerResponse(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* uploadAvatarSaga(action: PayloadAction<any>): any {
    try {
        yield call(uploadAvatarApi, action.payload);
        yield put(uploadAvatarSuccess());
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* removeAvatarSaga() {
    try {
        yield removeAvatarApi();
        yield put(removeAvatarSuccess());
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* updateUserProfileSaga() {
    try {
        yield all([put(getUserData()), put(getFollowersData()), put(getFollowingData())]);
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* getFollowersAndFollowingSaga() {
    try {
        yield all([put(getFollowersData()), put(getFollowingData())]);
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* watchGetFollowersAndFollowing() {
    yield takeLatest("GET_FOLLOWERS_AND_FOLLOWING_DATA", getFollowersAndFollowingSaga);
}

export function* watchUpdateUserProfile() {
    yield takeLatest(
        ["UPDATE_USER_PROFILE", uploadAvatarSuccess.type, removeAvatarSuccess.type],
        updateUserProfileSaga
    );
}

export function* watchFollowUser() {
    yield takeLatest(followUserRequest.type, followUserSaga);
}

export function* watchUnfollowUser() {
    yield takeLatest(unfollowUserRequest.type, unfollowUserSaga);
}

export function* watchDeleteFollower() {
    yield takeLatest(deleteFollowerRequest.type, deleteFollowerSaga);
}

export function* watchUploadAvatar() {
    yield takeLatest(uploadAvatarRequest.type, uploadAvatarSaga);
}

export function* watchRemoveAvatar() {
    yield takeLatest(removeAvatarRequest.type, removeAvatarSaga);
}
