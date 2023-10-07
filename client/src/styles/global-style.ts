import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    user-select: none;
    scroll-behavior: smooth;
    font-family: 'Comfortaa', cursive;
    font-size: 14px;
    font-weight: normal;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    border: 0;
    padding: 0;
    margin: 0;
    color: #f5f5f5;
}

button, input[type="submit"] {
    cursor: pointer;
    transition: all .3s ease;
}

input, button {
    background-color: unset;
}
`;
