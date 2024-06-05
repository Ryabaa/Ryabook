import styled from "styled-components";

export default styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    row-gap: 15px;
    border-right: 1px solid #545455;
    height: 100%;
    width: 240px;
    padding: 40px 20px 40px;
    position: fixed;
    left: 0;
    right: 0;
    & h1 {
        font-size: 35px;
        padding-bottom: 40px;
        font-family: "Indie Flower", cursive;
    }
`;

const MenuButton = styled.button`
    margin-top: auto;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    transition: all 0.1s ease;
    color: #fff;
    padding-left: 15px;
    & svg {
        width: 32px;
    }
    & p {
        font-size: 14px;
        padding-top: 3px;
    }
    &:hover {
        background: #5c5c5c;
    }
`;

const NotificationsCounter = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #ff3040;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 0 0 17px;
    & span {
        font-size: 11px;
    }
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const AddPost = styled.img``;

export { LinkContainer, MenuButton, NotificationsCounter, Avatar, AddPost };
