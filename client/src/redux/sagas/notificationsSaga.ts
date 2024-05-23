import { all, put, takeLatest } from "redux-saga/effects";

import {
    getNotificationsApi,
    getUnreadNotificationsCountApi,
    markAllNotificationsAsReadApi,
} from "./api/notificationsApi";
import {
    getNotifications,
    getNotificationsData,
    getUnreadNotificationsCount,
    getUnreadNotificationsCountData,
    markAllNotificationsAsRead,
    markAllNotificationsAsReadData,
} from "../reducers/notificationsSlice";

export function* getNotificationsSaga(): any {
    try {
        const res = yield getNotificationsApi().then((res) => res);
        yield put(getNotifications(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* markAllNotificationsAsReadSaga(): any {
    try {
        const res = yield markAllNotificationsAsReadApi().then((res) => res);
        yield put(markAllNotificationsAsRead(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* getUnreadNotificationsCountSaga(): any {
    try {
        const res = yield getUnreadNotificationsCountApi().then((res) => res);
        yield put(getUnreadNotificationsCount(res));
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* updateNotificationDataSaga() {
    try {
        yield all([
            put(getNotificationsData()),
            put(markAllNotificationsAsReadData()),
            put(getUnreadNotificationsCountData()),
        ]);
    } catch (error) {
        yield put({ type: "PRODUCTS_REQUEST_FAILED", error });
    }
}

export function* watchUpdateNotificationsData() {
    yield takeLatest("UPDATE_NOTIFICATIONS_DATA", updateNotificationDataSaga);
}
