import { all, call, takeEvery } from "redux-saga/effects";

import { reqestUrl } from "../constants/requestUrl";

import {
    getFollowersSaga,
    getFollowingSaga,
    getUserListSaga,
    getUserSaga,
    onDeleteUserStart,
    onFollowUserStart,
    onUnfollowUserStart,
} from "./userSaga";
import { onAuthStart } from "./authSaga";

export default function* sagas() {
    yield takeEvery(reqestUrl.userList, getUserListSaga);
    yield takeEvery(reqestUrl.user, getUserSaga);
    yield takeEvery(reqestUrl.followers, getFollowersSaga);
    yield takeEvery(reqestUrl.following, getFollowingSaga);
    yield all([
        call(onAuthStart),
        call(onDeleteUserStart),
        call(onUnfollowUserStart),
        call(onFollowUserStart),
    ]);
}
