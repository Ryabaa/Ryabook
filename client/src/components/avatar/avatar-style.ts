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
    width: 400px;
    z-index: 5;
    border-radius: 40px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    & button {
        border-top: 1px solid rgb(55 55 55);
        width: 100%;
        height: 48px;
    }
`;

export const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    row-gap: 15px;
    & img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }
    & h2 {
        font-size: 22px;
    }
`;

export const UploadButton = styled.button`
    color: #0095f6;
`;

export const RemoveButton = styled.button`
    color: #ed4956;
`;

export const CloseButton = styled.button``;
