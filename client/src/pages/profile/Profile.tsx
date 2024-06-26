import { FC, useEffect } from "react";

import StyledProfile, { Content, Head, PostsTitle, Info, Avatar } from "./profile-style";

import { HiRectangleStack } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

import Nav from "../../components/nav/Nav";
import PostsList from "../../components/posts/PostList";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { openAvatarModal } from "../../redux/reducers/avatarSlice";

const Profile: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.currentUser);
    const { followers, following } = useAppSelector((state) => state.followers);
    const postListLength = useAppSelector((state) => state.post.postList.length);

    const handleOpenAvatarModal = async () => {
        dispatch(openAvatarModal());
    };
    useEffect(() => {
        dispatch({ type: "UPDATE_USER_PROFILE" });
    }, [dispatch]);

    return (
        <StyledProfile>
            <Nav />
            <Content>
                <Head>
                    <Avatar onClick={handleOpenAvatarModal}>
                        <img src={user.avatar} alt="" />
                    </Avatar>
                    <Info>
                        <div>
                            <h2>{user.username}</h2>
                        </div>
                        <div>
                            <h3>{postListLength} posts</h3>
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
                <PostsList />
            </Content>
        </StyledProfile>
    );
};

export default Profile;
