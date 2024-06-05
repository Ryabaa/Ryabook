import { FC, useEffect } from "react";

import { Posts, Post, Container, Photo } from "./styles/posts-list-style";

import { FaComment, FaHeart } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { getCurrentPost, getPostListRequest, openPostModal } from "../../redux/reducers/postSlice";

const PostList: FC = () => {
    const dispatch = useAppDispatch();
    const { postList } = useAppSelector((state) => state.post);

    const handleOpenModal = async (post: any) => {
        dispatch(openPostModal());
        dispatch(getCurrentPost(post));
    };

    useEffect(() => {
        dispatch(getPostListRequest());
    }, [dispatch]);

    return (
        <Posts>
            {postList.length ? (
                postList.map((post: any, index: number) => (
                    <Post key={index} onClick={() => handleOpenModal(post)}>
                        <Photo src={post.imageUrl} alt="" />
                        <Container>
                            <div>
                                <FaHeart size={"22px"} />
                                <p>{post.likes.length}</p>
                            </div>
                            <div>
                                <FaComment size={"22px"} />
                                <p>{post.comments.length}</p>
                            </div>
                        </Container>
                    </Post>
                ))
            ) : (
                <div>Нихуя нет бро</div>
            )}
        </Posts>
    );
};

export default PostList;
