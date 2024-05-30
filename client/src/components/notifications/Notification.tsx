import { FC } from "react";
import moment from "moment";

import {
    NotificationContainer,
    Avatar,
    Username,
    Post,
    Time,
    NotificationDetails,
} from "./notifications-style";
import { clearNotification, openNotificationsModal } from "../../redux/reducers/notificationsSlice";
import { useAppDispatch } from "../../redux/hooks/reduxHooks";

interface INotificationProps {
    notification: any;
    popUp?: boolean;
}

const Notification: FC<INotificationProps> = ({ notification, popUp }) => {
    const dispatch = useAppDispatch();

    const handleOpenNotificationsModal = async () => {
        dispatch(openNotificationsModal());
        dispatch(clearNotification());
    };

    return (
        <NotificationContainer onClick={popUp ? handleOpenNotificationsModal : undefined} popUp={popUp}>
            <Avatar src={notification.avatar} alt="Avatar" />
            <NotificationDetails>
                <Username>{`${notification.username} `}</Username>
                <span>{notification.action}</span>
                <br />
                {!popUp ? <Time>{moment(notification.date).fromNow()}</Time> : <></>}
            </NotificationDetails>
            {notification.post && <Post>{/* notification.post */}</Post>}
        </NotificationContainer>
    );
};

export default Notification;
