import { all, call, takeEvery } from "redux-saga/effects";

import { reqestUrl } from "../constants/requestUrl";

import { getUserListSaga, getUserSaga, onDeleteUserStart } from "./userListSaga";
import { onAuthStart } from "./authSaga";

export default function* sagas() {
    yield takeEvery(reqestUrl.allUsers, getUserListSaga);
    yield takeEvery(reqestUrl.user, getUserSaga);
    yield all([call(onAuthStart), call(onDeleteUserStart)]);
}
