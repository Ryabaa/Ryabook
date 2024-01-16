import { FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import {
    getFollowersData,
    getFollowingData,
    unfollowUser,
    followUser,
} from "../../redux/reducers/followersSlice";
import { getUserData } from "../../redux/reducers/userListSlice";
import { closeModal } from "../../redux/reducers/modalSlice";
import { setLoading } from "../../redux/reducers/loaderSlice";

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

import LoaderBox from "../loader/LoaderBox";

import { IoClose } from "react-icons/io5";

const Followers: FC = () => {
    const dispatch = useAppDispatch();
    const currentUser: any = useAppSelector((state) => state.users.currentUser);
    const modalIsOpen = useAppSelector((state) => state.modal.modalIsOpen);
    const { followers, following } = useAppSelector((state) => state.followers);
    const [switcher, setSwitcher] = useState(true);
    const [updateStatus, setUpdateStatus] = useState(false);

    const handleCloseModal = async () => {
        dispatch(closeModal());
    };

    const handleFollow = async (id: string) => {
        await dispatch(followUser({ id: id }));
        setUpdateStatus((prev) => !prev);
    };

    const handleUnfollow = async (id: string) => {
        await dispatch(unfollowUser({ id: id }));
        setUpdateStatus((prev) => !prev);
    };

    const handleSwitch = async (state: boolean) => {
        setSwitcher(state);
    };

    useEffect(() => {
        if (modalIsOpen) {
            dispatch(setLoading(true));
            dispatch(getFollowersData());
            dispatch(getFollowingData());
            dispatch(getUserData());
            dispatch(setLoading(false));
        }
        return () => {
            dispatch(setLoading(false));
        };
    }, [dispatch, switcher, modalIsOpen, updateStatus]);

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
                            <LoaderBox>
                                <Content>
                                    {switcher &&
                                        followers.map((user) => (
                                            <Block>
                                                <div>
                                                    <img src={user.avatar} alt="" />
                                                    <h2>{user.username}</h2>
                                                    {!currentUser.following.find(
                                                        (follower: string) => follower === user._id
                                                    ) && (
                                                        <div>
                                                            <p>॰</p>
                                                            <button onClick={() => handleFollow(user._id)}>
                                                                follow
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                                <button value={"second"}>Remove</button>
                                            </Block>
                                        ))}
                                    {!switcher &&
                                        following.map((user) => (
                                            <Block>
                                                <div>
                                                    <img src={user.avatar} alt="" />
                                                    <h2>{user.username}</h2>
                                                </div>
                                                <button
                                                    value={"second"}
                                                    onClick={() => handleUnfollow(user._id)}>
                                                    Unfollow
                                                </button>
                                            </Block>
                                        ))}
                                </Content>
                            </LoaderBox>
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
