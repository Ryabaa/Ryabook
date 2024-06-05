import styled from "styled-components";

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
    width: 40%;
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
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    border-bottom: 1px solid #545455;
    & h2 {
        font-size: 18px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
    & button {
        color: #53a4e6;
        font-size: 16px;
        &:first-child {
            color: #a8a8a8;
        }
    }
`;

export const Selection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    row-gap: 20px;
    & p {
        font-size: 18px;
    }
    & button {
        font-size: 15px;
        background-color: #53a4e6;
        border-radius: 10px;
        padding: 8px 15px;
    }
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 0 0 15px 15px;
`;

export const PopUp = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1a1a1a;
    width: 400px;
    border-radius: 15px;
    & div {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        justify-content: center;
        align-items: center;
        & h2 {
            font-size: 18px;
        }
        & p {
            font-size: 12px;
            color: #a8a8a8;
        }
    }
    & button {
        padding: 20px 0;
        font-size: 13px;
    }
`;

export const Discard = styled.button`
    color: #eb4c5a;
    font-weight: 600;
    border-top: 1px solid #545455;
    border-bottom: 1px solid #545455;
`;
