import { FC, useEffect } from "react";
import moment from "moment";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";

import { closePostModal, likePostRequest } from "../../redux/reducers/postSlice";

import {
    Modal,
    CloseButton,
    ModalSubstrate,
    ModalWrapper,
    Content,
    Photo,
    Side,
    Head,
    CommentsBlock,
    Comment,
    CommentContent,
    CommentText,
    CommentInfo,
    Actions,
    Info,
    BottomBlock,
    Form,
    CommentsEmpty,
    Like,
} from "./styles/post-style";

import { IoClose } from "react-icons/io5";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const Post: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.currentUser);
    const { postModalIsOpen, currentPost } = useAppSelector((state) => state.post);

    const handleCloseModal = async () => {
        dispatch(closePostModal());
    };

    const handleLikePost = async (postId: string) => {
        dispatch(likePostRequest(postId));
    };

    useEffect(() => {
        if (postModalIsOpen) {
            console.log("вай");
        }
    }, [dispatch, postModalIsOpen]);

    return (
        <div>
            {postModalIsOpen && (
                <ModalWrapper>
                    <ModalSubstrate onClick={handleCloseModal} />
                    <Modal>
                        <Content>
                            <Photo src={currentPost.imageUrl} alt="" />
                            <Side>
                                <Head>
                                    <img src={user.avatar} alt="" />
                                    <h2>Ryaba</h2>
                                    <button>
                                        <BsThreeDots size={"25px"} />
                                    </button>
                                </Head>
                                <CommentsBlock>
                                    {currentPost.comments.length ? (
                                        currentPost.comments.map((post: any, index: number) => (
                                            <Comment>
                                                <img src={currentPost.imageUrl} alt="" />
                                                <CommentContent>
                                                    <CommentText>
                                                        <h3>Artem</h3>
                                                        <p>Nice photo man!</p>
                                                    </CommentText>
                                                    <CommentInfo>
                                                        <p>38w</p>
                                                        <p>3 Likes</p>
                                                    </CommentInfo>
                                                </CommentContent>
                                                <button>
                                                    <FaRegHeart size={"16px"} />
                                                </button>
                                            </Comment>
                                        ))
                                    ) : (
                                        <CommentsEmpty>
                                            <h3>No comments yet.</h3>
                                            <p>Start the conversation.</p>
                                        </CommentsEmpty>
                                    )}
                                </CommentsBlock>
                                <BottomBlock>
                                    <Actions>
                                        <Like
                                            liked={currentPost.likes.length}
                                            onClick={() => handleLikePost(currentPost._id)}>
                                            {currentPost.likes.length ? (
                                                <FaHeart size={"24px"} />
                                            ) : (
                                                <FaRegHeart size={"24px"} />
                                            )}
                                        </Like>
                                        <button>
                                            <FaRegComment size={"24px"} />
                                        </button>
                                        <button>
                                            <PiPaperPlaneTiltBold size={"24px"} />
                                        </button>
                                    </Actions>
                                    <Info>
                                        <h3>{currentPost.likes.length} Likes</h3>
                                        <p>{moment(currentPost.createdAt).fromNow()}</p>
                                    </Info>
                                </BottomBlock>
                                <Form>
                                    <input placeholder="Add a comment..." type="text" />
                                    <button>Post</button>
                                </Form>
                            </Side>
                        </Content>
                    </Modal>
                    <CloseButton onClick={handleCloseModal}>
                        <IoClose size={"45px"} />
                    </CloseButton>
                </ModalWrapper>
            )}
        </div>
    );
};

export default Post;
