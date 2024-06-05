import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
    getPostListRequest,
    getPostListSuccess,
    likePostRequest,
    likePostSuccess,
    uploadPostRequest,
    uploadPostSuccess,
} from "../reducers/postSlice";
import { getPostListApi, likePostApi, uploadPostApi } from "./api/postApi";

export function* getPostListSaga(): any {
    try {
        const res = yield getPostListApi().then((res: any) => res);
        yield put(getPostListSuccess(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* uploadPostSaga(action: PayloadAction<FormData>) {
    try {
        yield call(uploadPostApi, action.payload);
        yield put(uploadPostSuccess());
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* likePostSaga(action: PayloadAction<string>) {
    try {
        const res: Generator<any> = yield call(likePostApi, action.payload);
        yield put(likePostSuccess(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* watchGetPostList() {
    yield takeLatest([getPostListRequest.type, uploadPostSuccess.type, likePostSuccess], getPostListSaga);
}

export function* watchUploadPost() {
    yield takeLatest(uploadPostRequest.type, uploadPostSaga);
}

export function* watchLikePost() {
    yield takeLatest(likePostRequest.type, likePostSaga);
}
