import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { IAuth } from "../../types/auth";

import { signUpApi, loginApi } from "./api/authApi";
import { authRequest, authResponce } from "../reducers/authSlice";

function* authSaga(action: PayloadAction<any>) {
    switch (action.payload.type) {
        case "signup":
            try {
                const auth: IAuth = yield call(signUpApi, action.payload);
                yield put(authResponce(auth));
            } catch (error) {
                yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
            }
            break;
        case "login":
            try {
                const auth: IAuth = yield call(loginApi, action.payload);
                yield put(authResponce(auth));
            } catch (error) {
                yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
            }
            break;
    }
}

export function* watchAuth() {
    yield takeLatest(authRequest.type, authSaga);
}
