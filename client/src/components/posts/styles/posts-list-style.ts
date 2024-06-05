import styled from "styled-components";

export const Posts = styled.div`
    width: 100%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
`;

export const Post = styled.div`
    position: relative;
    background-color: #545455;
    width: 310px;
    height: 310px;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        & div {
            display: flex;
        }
    }
`;

export const Container = styled.div`
    background-color: #00000046;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: none;
    column-gap: 30px;
    position: absolute;
    & div {
        display: flex;
        column-gap: 5px;
        justify-content: center;
        align-items: center;
        & p {
            font-size: 16px;
            font-weight: 600;
        }
    }
`;

export const Photo = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;
