import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { deleteUserApi, getUserApi, getUserListApi } from "./api/userListApi";

import { deleteUser, getUser, updateUserList } from "../reducers/userListSlice";

export function* getUserListSaga(): any {
    try {
        const userList = yield getUserListApi().then((res) => res);
        yield put(updateUserList(userList));
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

export function* onDeleteUserStart() {
    yield takeLatest(deleteUser.type, deleteUserSaga);
}
