import { FC } from "react";
import moment from "moment";

import {
    NotificationContainer,
    Avatar,
    Username,
    Post,
    Time,
    NotificationDetails,
    FollowingButton,
} from "./notifications-style";

interface INotificationProps {
    notification: any;
    popUp?: boolean;
}

const Notification: FC<INotificationProps> = ({ notification, popUp }) => {
    return (
        <NotificationContainer popUp={popUp}>
            <Avatar src={notification.avatar} alt="Avatar" />
            <NotificationDetails>
                <Username>{`${notification.username} `}</Username>
                <span>{`${notification.action}. `}</span>
                <Time>{moment(notification.date).fromNow()}</Time>
            </NotificationDetails>
            {notification.post && <Post>{/* notification.post */}</Post>}
            {"following" in notification ? (
                notification.following ? (
                    <FollowingButton disabled>Following</FollowingButton>
                ) : (
                    <FollowingButton>Follow</FollowingButton>
                )
            ) : (
                <></>
            )}
        </NotificationContainer>
    );
};

export default Notification;
