import styled from "styled-components";

export default styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 20px 40px 260px;
    text-align: center;
`;

const Head = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
    justify-content: center;
    justify-items: center;
    height: 250px;
`;

const Avatar = styled.button`
    width: 150px;
    height: 150px;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 20px;
    width: 100%;
    position: relative;
    & div {
        display: flex;
        align-items: center;
        column-gap: 40px;
    }
    & h2 {
        font-size: 18px;
    }
    & h3,
    p {
        font-size: 12px;
    }
    & svg {
        position: absolute;
        top: 0;
        right: 0;
    }
`;

const PostsTitle = styled.div`
    display: flex;
    justify-content: center;
    border-top: solid 1px #545455;
    margin-top: 60px;
    & div {
        border-top: solid 1px #fff;
        height: 100%;
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 7px;
        padding: 12px 0;
        & h2 {
            font-size: 13px;
        }
    }
`;

const Posts = styled.div`
    width: 100%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    & p {
        background-color: #545455;
        width: 310px;
        height: 310px;
    }
`;

export { Content, Head, Avatar, Info, PostsTitle, Posts };
