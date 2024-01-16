import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../redux/hooks/reduxHooks";
import { openModal } from "../../redux/reducers/modalSlice";

import StyledNav, { LinkContainer, MenuButton } from "./nav-style";

import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Nav: FC = () => {
    const dispatch = useAppDispatch();

    const handleOpenModal = async () => {
        dispatch(openModal());
    };

    return (
        <StyledNav>
            <h1>Ryabook</h1>
            <Link to="/home">
                <LinkContainer>
                    <AiFillHome size={"27px"} />
                    <p>Home</p>
                </LinkContainer>
            </Link>
            <Link to="/messages">
                <LinkContainer>
                    <TbMessageCircle2 size={"27px"} />
                    <p>Messages</p>
                </LinkContainer>
            </Link>
            <button onClick={handleOpenModal}>
                <LinkContainer>
                    <FaUserFriends size={"22px"} />
                    <p>Followers</p>
                </LinkContainer>
            </button>
            <Link to="/notifications">
                <LinkContainer>
                    <IoNotifications size={"27px"} />
                    <p>Notifications</p>
                </LinkContainer>
            </Link>
            <Link to="/profile">
                <LinkContainer>
                    <CgProfile size={"27px"} />
                    <p>My profile</p>
                </LinkContainer>
            </Link>
            <MenuButton>
                <IoMenu size={"35px"} />
            </MenuButton>
        </StyledNav>
    );
};

export default Nav;
