import { FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import {
    unfollowUserRequest,
    followUserRequest,
    deleteFollowerRequest,
} from "../../redux/reducers/followersSlice";

import { closeFollowersModal } from "../../redux/reducers/modalSlice";

import {
    Modal,
    Container,
    CloseButton,
    ModalSubstrate,
    ModalWrapper,
    Content,
    SwitcherButton,
    Switcher,
    Block,
} from "./followers-style";

import { IoClose } from "react-icons/io5";

const Followers: FC = () => {
    const dispatch = useAppDispatch();
    const modalIsOpen = useAppSelector((state) => state.modal.followersModalIsOpen);
    const { followers, following } = useAppSelector((state) => state.followers);
    const [switcher, setSwitcher] = useState(true);

    const handleCloseModal = async () => {
        dispatch(closeFollowersModal());
    };

    const handleFollow = async (id: string) => {
        dispatch(followUserRequest({ id: id }));
    };

    const handleUnfollow = async (id: string) => {
        dispatch(unfollowUserRequest({ id: id }));
    };

    const handleDeleteFollower = async (id: string) => {
        dispatch(deleteFollowerRequest({ id: id }));
    };

    const handleSwitch = async (state: boolean) => {
        setSwitcher(state);
    };

    useEffect(() => {
        if (modalIsOpen) {
            dispatch({ type: "GET_FOLLOWERS_AND_FOLLOWING_DATA" });
        }
    }, [modalIsOpen]);

    return (
        <div>
            {modalIsOpen && (
                <ModalWrapper>
                    <ModalSubstrate onClick={handleCloseModal} />
                    <Modal>
                        <Container>
                            <Switcher>
                                <SwitcherButton active={switcher} onClick={() => handleSwitch(true)}>
                                    Followers
                                </SwitcherButton>
                                <SwitcherButton active={!switcher} onClick={() => handleSwitch(false)}>
                                    Following
                                </SwitcherButton>
                            </Switcher>
                            <Content>
                                {switcher &&
                                    followers.map((user) => (
                                        <Block>
                                            <div>
                                                <img src={user.avatar} alt="" />
                                                <h2>{user.username}</h2>
                                                {!following.some(
                                                    (currentUser) => currentUser._id === user._id
                                                ) && (
                                                    <div>
                                                        <p>॰</p>
                                                        <button onClick={() => handleFollow(user._id)}>
                                                            follow
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                value={"second"}
                                                onClick={() => handleDeleteFollower(user._id)}>
                                                Remove
                                            </button>
                                        </Block>
                                    ))}
                                {!switcher &&
                                    following.map((user) => (
                                        <Block>
                                            <div>
                                                <img src={user.avatar} alt="" />
                                                <h2>{user.username}</h2>
                                            </div>
                                            <button value={"second"} onClick={() => handleUnfollow(user._id)}>
                                                Unfollow
                                            </button>
                                        </Block>
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

export default Followers;
