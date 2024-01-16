import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
    deleteUserApi,
    followUserApi,
    getFollowersApi,
    getFollowingApi,
    getUserApi,
    getUserListApi,
    unfollowUserApi,
} from "./api/userApi";

import { deleteUser, getUser, updateUserList } from "../reducers/userListSlice";
import { followUser, getFollowers, getFollowing, unfollowUser } from "../reducers/followersSlice";

export function* getUserListSaga(): any {
    try {
        const res = yield getUserListApi().then((res) => res);
        yield put(updateUserList(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* deleteUserSaga(action: PayloadAction<any>): any {
    if (!action.payload.message) {
        try {
            const res = yield call(deleteUserApi, action.payload.id);
            yield put(deleteUser(res));
        } catch (error) {
            yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
        }
    }
}

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
        const res = yield getFollowingApi().then((res) => res);
        yield put(getFollowing(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* followUserSaga(action: PayloadAction<any>): any {
    if (!action.payload.message) {
        try {
            const res = yield call(followUserApi, action.payload.id);
            yield put(followUser(res));
        } catch (error) {
            yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
        }
    }
}

export function* unfollowUserSaga(action: PayloadAction<any>): any {
    if (!action.payload.message) {
        try {
            const res = yield call(unfollowUserApi, action.payload.id);
            yield put(unfollowUser(res));
        } catch (error) {
            yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
        }
    }
}

export function* onDeleteUserStart() {
    yield takeLatest(deleteUser.type, deleteUserSaga);
}

export function* onFollowUserStart() {
    yield takeLatest(followUser.type, followUserSaga);
}

export function* onUnfollowUserStart() {
    yield takeLatest(unfollowUser.type, unfollowUserSaga);
}
