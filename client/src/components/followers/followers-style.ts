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
    height: 65%;
    width: 450px;
    z-index: 5;
    border-radius: 40px;
    padding-top: 55px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
`;

export const Switcher = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #303030;
`;

export const SwitcherButton = styled.button.attrs((props: { active: boolean }) => props)`
    background-color: ${(props) => (props.active ? "#5c5c5c" : "#303030")};
    width: 50%;
    height: 60px;
    font-size: 15px;
    &:hover {
        background-color: #3d3d3d;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    height: 80%;
    overflow-y: scroll;
    padding: 0 40px;
`;

export const Block = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & div {
        display: flex;
        column-gap: 7px;
        align-items: center;
        & button {
            font-size: 12px;
            color: #53a4e6;
        }
    }
    & img {
        width: 50px;
        border-radius: 50%;
    }
    & h2 {
        margin-left: 15px;
        font-size: 16px;
    }
    & p {
        font-size: 12px;
        color: #53a4e6;
    }
    & button[value="second"] {
        background-color: #5c5c5c;
        border-radius: 20px;
        width: 100px;
        height: 35px;
        &:hover {
            background-color: #acacac;
        }
    }
`;
