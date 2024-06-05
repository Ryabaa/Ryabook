import { all, call, takeEvery } from "redux-saga/effects";

import { reqestUrl } from "../constants/requestUrl";

import {
    getFollowersSaga,
    getFollowingSaga,
    getUserSaga,
    watchUpdateUserProfile,
    watchFollowUser,
    watchUnfollowUser,
    watchGetFollowersAndFollowing,
    watchDeleteFollower,
    watchUploadAvatar,
    watchRemoveAvatar,
} from "./userSaga";

import { watchAuth } from "./authSaga";

import {
    getNotificationsSaga,
    getUnreadNotificationsCountSaga,
    markAllNotificationsAsReadSaga,
    watchUpdateNotificationsData,
} from "./notificationsSaga";

import { watchGetPostList, watchLikePost, watchUploadPost } from "./postSaga";

export default function* sagas() {
    yield takeEvery(reqestUrl.user, getUserSaga);
    yield takeEvery(reqestUrl.followers, getFollowersSaga);
    yield takeEvery(reqestUrl.following, getFollowingSaga);
    yield takeEvery(reqestUrl.getNotifications, getNotificationsSaga);
    yield takeEvery(reqestUrl.markAllNotificationsAsRead, markAllNotificationsAsReadSaga);
    yield takeEvery(reqestUrl.getUnreadNotificationsCount, getUnreadNotificationsCountSaga);
    yield all([
        call(watchAuth),
        call(watchGetFollowersAndFollowing),
        call(watchUpdateUserProfile),
        call(watchFollowUser),
        call(watchUnfollowUser),
        call(watchDeleteFollower),
        call(watchUpdateNotificationsData),
        call(watchUploadAvatar),
        call(watchRemoveAvatar),
        call(watchGetPostList),
        call(watchUploadPost),
        call(watchLikePost),
    ]);
}
