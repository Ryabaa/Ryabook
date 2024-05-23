import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { openFollowersModal, openNotificationsModal } from "../../redux/reducers/modalSlice";

import StyledNav, { LinkContainer, MenuButton, NotificationsCounter } from "./nav-style";

import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { IoMenu, IoSearchOutline, IoNotifications } from "react-icons/io5";
import { getUnreadNotificationsCountData } from "../../redux/reducers/notificationsSlice";

const Nav: FC = () => {
    const dispatch = useAppDispatch();
    const { unreadNotificationsCount } = useAppSelector((state) => state.notifications);

    const handleOpenFollowersModal = async () => {
            dispatch(openFollowersModal());
        },
        handleOpenNotificationsModal = async () => {
            dispatch(openNotificationsModal());
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
            <Link to="/profile">
                <LinkContainer>
                    <CgProfile size={"27px"} />
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
