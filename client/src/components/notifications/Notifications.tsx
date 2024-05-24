import moment from "moment";
import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";

import { closeNotificationsModal } from "../../redux/reducers/modalSlice";

import {
    Modal,
    Container,
    CloseButton,
    ModalSubstrate,
    ModalWrapper,
    Content,
    NotificationContainer,
    Avatar,
    Username,
    Post,
    Time,
    NotificationDetails,
    FollowingButton,
} from "./notifications-style";

import { IoClose } from "react-icons/io5";
import Notification from "./Notification";

const Notifications: FC = () => {
    const dispatch = useAppDispatch();
    const modalIsOpen = useAppSelector((state) => state.modal.notificationsModalIsOpen);
    const { notifications } = useAppSelector((state) => state.notifications);

    const handleCloseModal = async () => {
        dispatch(closeNotificationsModal());
    };

    useEffect(() => {
        if (modalIsOpen) {
            dispatch({ type: "UPDATE_NOTIFICATIONS_DATA" });
        }
    }, [dispatch, modalIsOpen]);

    return (
        <div>
            {modalIsOpen && (
                <ModalWrapper>
                    <ModalSubstrate onClick={handleCloseModal} />
                    <Modal>
                        <Container>
                            <h2>Notifications</h2>
                            <Content>
                                {notifications.map((notification: any, index) => (
                                    <Notification notification={notification} key={index} />
                                ))}
                            </Content>
                        </Container>
                        <CloseButton onClick={handleCloseModal}>
                            <IoClose fill="#5c5c5c" size={"35px"} />
                        </CloseButton>
                    </Modal>
                </ModalWrapper>
            )}
        </div>
    );
};

export default Notifications;
