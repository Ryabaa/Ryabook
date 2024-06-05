import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { getUnreadNotificationsCountData } from "../../redux/reducers/notificationsSlice";
import { openFollowersModal } from "../../redux/reducers/followersSlice";
import { openNotificationsModal } from "../../redux/reducers/notificationsSlice";

import StyledNav, { LinkContainer, MenuButton, NotificationsCounter, Avatar } from "./nav-style";

import { AiFillHome } from "react-icons/ai";
import { LiaPlusCircleSolid } from "react-icons/lia";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { IoMenu, IoSearchOutline, IoNotifications } from "react-icons/io5";
import { openPostCreatorModal } from "../../redux/reducers/postSlice";

const Nav: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.currentUser);
    const { unreadNotificationsCount } = useAppSelector((state) => state.notifications);

    const handleOpenFollowersModal = async () => {
        dispatch(openFollowersModal());
    };

    const handleOpenNotificationsModal = async () => {
        dispatch(openNotificationsModal());
    };

    const handleOpenPostCreatorModal = async () => {
        dispatch(openPostCreatorModal());
    };

    useEffect(() => {
        dispatch(getUnreadNotificationsCountData());
    }, [dispatch]);

    return (
        <StyledNav>
            <h1>Ryabook</h1>
            <Link to="/home">
                <LinkContainer>
                    <AiFillHome size={"27px"} />
                    <p>Home</p>
                </LinkContainer>
            </Link>
            <button /* onClick={handleOpenSearchModal} */>
                <LinkContainer>
                    <IoSearchOutline size={"28px"} />
                    <p>Search</p>
                </LinkContainer>
            </button>
            <button onClick={handleOpenFollowersModal}>
                <LinkContainer>
                    <FaUserFriends size={"21px"} />
                    <p>Followers</p>
                </LinkContainer>
            </button>
            <Link to="/messages">
                <LinkContainer>
                    <TbMessageCircle2 size={"27px"} />
                    <p>Messages</p>
                </LinkContainer>
            </Link>
            <button onClick={handleOpenNotificationsModal}>
                <LinkContainer>
                    {unreadNotificationsCount !== 0 && (
                        <NotificationsCounter>
                            <span>{unreadNotificationsCount}</span>
                        </NotificationsCounter>
                    )}
                    <IoNotifications size={"27px"} />
                    <p>Notifications</p>
                </LinkContainer>
            </button>
            <button onClick={handleOpenPostCreatorModal}>
                <LinkContainer>
                    <LiaPlusCircleSolid size={"30px"} />
                    <p>Create</p>
                </LinkContainer>
            </button>
            <Link to="/profile">
                <LinkContainer>
                    <Avatar src={user.avatar} alt="" />
                    <p>Profile</p>
                </LinkContainer>
            </Link>
            <MenuButton>
                <IoMenu size={"35px"} />
            </MenuButton>
        </StyledNav>
    );
};

export default Nav;
