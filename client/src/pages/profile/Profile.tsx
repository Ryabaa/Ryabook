import { FC, useEffect, useState } from "react";

import StyledProfile, { Content, Head, PostsTitle, Posts, Info } from "./profile-style";

import { HiRectangleStack } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

import Nav from "../../components/nav/Nav";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";

const Profile: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.currentUser);
    const { followers, following } = useAppSelector((state) => state.followers);

    useEffect(() => {
        dispatch({ type: "UPDATE_USER_PROFILE" });
    }, [dispatch]);

    return (
        <StyledProfile>
            <Nav />
            <Content>
                <Head>
                    <img src={user.avatar} alt="" />
                    <Info>
                        <div>
                            <h2>{user.username}</h2>
                        </div>
                        <div>
                            <h3>4 posts</h3>
                            <h3>{followers.length} followers</h3>
                            <h3>{following.length} following</h3>
                        </div>
                        <p>Description</p>
                        <IoMdSettings size={"30px"} />
                    </Info>
                </Head>
                <PostsTitle>
                    <div>
                        <HiRectangleStack size={"17px"} />
                        <h2>Posts</h2>
                    </div>
                </PostsTitle>
                <Posts>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </Posts>
            </Content>
        </StyledProfile>
    );
};

export default Profile;
