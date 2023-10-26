import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    width: min-content;
    height: 480px;
    & h2 {
        font-size: 40px;
        color: #cfd0d1;
        text-align: center;
    }
    p {
        color: #464577;
        font-size: 16px;
        text-align: center;
    }
    a {
        color: #cfd0d1;
    }
    & div {
        border-radius: 5px;
    }
`;
