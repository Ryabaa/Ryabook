import styled from "styled-components";

export default styled.form`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    row-gap: 20px;
    width: min-content;
    & label {
        color: #616367;
        position: absolute;
        left: 15px;
        top: 10px;
    }
    & input {
        width: 100%;
        color: #ffffff;
        font-size: 16px;
        padding: 35px 15px 15px;
        border-radius: 10px;
    }
    & input[type="submit"] {
        padding: 15px 0;
        background-color: #464577;
        border-radius: 20px;
        align-self: center;
        border: 2px solid #00000000;
        &:hover {
            background-color: #46457734;
            border: 2px solid #464577;
        }
    }
`;
