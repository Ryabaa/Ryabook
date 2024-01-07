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
    color: #fff;
}

::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background: #040405;

}

::-webkit-scrollbar-thumb {
    background-color: #545454;
    border-radius: 10px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #aaaaaa;
    }
}

::-webkit-scrollbar-button {
    display: none;
}

button, input[type="submit"] {
    cursor: pointer;
    transition: all .3s ease;
}

input, button {
    background-color: unset;
}
`;
