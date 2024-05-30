import styled, { css, keyframes } from "styled-components";

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
    background-color: #1a1a1a;
    height: 80%;
    width: 450px;
    z-index: 5;
    border-radius: 40px;
    padding: 55px 40px 0;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    & h2 {
        font-size: 24px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
    padding: 20px 0;
    overflow-y: scroll;
`;

interface NotificationContainerProps {
    popUp?: boolean;
}

const popUpAnimation = keyframes`
    0% {
      bottom: 0;
      opacity: 0;
    }
    7% {
      bottom: 70px;
      opacity: 0.5;
    }
    10% {
      bottom: 60px;
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

export const NotificationContainer = styled.div<NotificationContainerProps>`
    display: flex;
    align-items: center;
    column-gap: 15px;
    z-index: 5;
    width: 100%;
    line-height: 20px;
    ${(props) =>
        props.popUp &&
        css`
            cursor: pointer;
            width: 295px;
            max-height: min-content;
            position: absolute;
            background-color: #1a1a1a;
            border-radius: 50px;
            bottom: 60px;
            right: 50px;
            opacity: 0;
            box-shadow: 0 0 15px #ffffff6e;
            animation: ${popUpAnimation} 5s cubic-bezier(0.4, 0, 1, 1);
        `};
`;

export const Avatar = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
`;

export const NotificationDetails = styled.p`
    max-width: 62%;
`;

export const Username = styled.span``;

export const Time = styled.span`
    color: #a8a8a8;
`;

export const Post = styled.div`
    background-color: #fff;
    width: 50px;
    height: 50px;
    margin: auto;
`;

export const FollowingButton = styled.button.attrs((props: { active: boolean }) => props)`
    background-color: ${(props) => (props.active ? "#0095f6" : "#5c5c5c")};
    border-radius: 10px;
    padding: 11px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;
