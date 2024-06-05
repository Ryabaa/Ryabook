import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const ModalSubstrate = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    z-index: 2;
`;

export const Modal = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    height: 75%;
    // width: 65%;
    width: min-content;
    z-index: 5;
    border-radius: 15px;
`;

export const CloseButton = styled.button`
    position: absolute;
    z-index: 5;
    top: 25px;
    right: 25px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const Photo = styled.img`
    border-radius: 15px 0 0 15px;
    height: 100%;
    width: auto;
`;

export const Side = styled.div`
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 15px 15px 0;
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #545455;
    column-gap: 15px;
    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    & button {
        margin-left: auto;
    }
`;

export const CommentsBlock = styled.div`
    overflow-y: scroll;
    display: flex;
    height: 100%;
    row-gap: 30px;
    padding: 15px;
    border-bottom: 1px solid #545455;
    flex-direction: column;
`;

export const Comment = styled.div`
    display: flex;
    column-gap: 15px;
    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    & button {
        margin-left: auto;
        display: flex;
        align-items: center;
        column-gap: 3px;
    }
`;

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const CommentText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    & h3 {
        font-size: 13px;
    }
    & p {
        font-size: 11px;
    }
`;

export const CommentInfo = styled.div`
    display: flex;
    column-gap: 15px;
    & p {
        font-size: 11px;
        color: #a8a8a8;
    }
`;

export const CommentsEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    margin-top: 50%;
    & h3 {
        font-size: 20px;
    }
    & p {
        font-size: 12px;
    }
`;

export const BottomBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #545455;
    row-gap: 30px;
`;

export const Actions = styled.div`
    display: flex;
    column-gap: 15px;
`;

interface LikeProps {
    liked: boolean;
}

export const Like = styled.button<LikeProps>`
    & svg {
        ${(props) =>
            props.liked &&
            css`
                fill: #ff3040;
            `};
    }
`;

export const Info = styled.div`
    & h3 {
        font-weight: 600;
    }
    & p {
        margin-top: 5px;
        color: #a8a8a8;
        font-size: 12px;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    & button {
        background-color: #53a4e6;
        padding: 3px 8px;
        border-radius: 5px;
    }
`;
