import { FC, useCallback, useEffect, useState } from "react";

import StyledProfile, { Content, Head, PostsTitle, Posts, Info } from "./profile-style";

import { HiRectangleStack } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

import Nav from "../components/nav/Nav";

import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { getUserData } from "../redux/reducers/userListSlice";
import { RootState } from "../redux/store/store";

const Profile: FC = () => {
    const dispatch = useAppDispatch();
    const user: any = useAppSelector((state: RootState) => state.users.currentUser);

    useEffect(() => {
        dispatch(getUserData());
    }, []);

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
                            <h3>0 posts</h3>
                            <h3>123 friends</h3>
                        </div>
                        <p>I am looser</p>
                        <IoMdSettings size={"33px"} />
                    </Info>
                </Head>
                <PostsTitle>
                    <div>
                        <HiRectangleStack size={"22px"} />
                        <h2>Posts</h2>
                    </div>
                </PostsTitle>
                <Posts>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </Posts>
            </Content>
        </StyledProfile>
    );
};

export default Profile;
