import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import {
    clearNotification,
    getUnreadNotificationsCountData,
    setNotification,
} from "../../redux/reducers/notificationsSlice";
import { socket } from "../../sockets";

import Notification from "./Notification";

const NotificationPopUp = () => {
    const dispatch = useAppDispatch();
    const latestNotification = useAppSelector((state) => state.notifications.latestNotification);

    useEffect(() => {
        socket.on("newNotification", (notification) => {
            dispatch(setNotification(notification));
            dispatch(getUnreadNotificationsCountData());
        });
    }, [dispatch]);

    useEffect(() => {
        if (latestNotification) {
            setTimeout(() => {
                dispatch(clearNotification());
            }, 5000);
        }
    }, [latestNotification]);

    return (
        <>{latestNotification ? <Notification notification={latestNotification} popUp={true} /> : <></>}</>
    );
};

export default NotificationPopUp;
