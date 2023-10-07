import styled from "styled-components";

interface IContainer {
    direction?: string;
    justify?: string;
    jself?: string;
    align?: string;
    aself?: string;
    row?: string;
    column?: string;
    background?: string;
    border?: string;
    width?: string;
    height?: string;
    position?: string;
    radius?: string;
    padding?: string;
}

export default styled.div<IContainer>`
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : "unset")};
    justify-content: ${(props) => (props.justify ? props.justify : "unset")};
    justify-self: ${(props) => (props.jself ? props.jself : "unset")};
    align-items: ${(props) => (props.align ? props.align : "unset")};
    align-self: ${(props) => (props.aself ? props.aself : "unset")};
    row-gap: ${(props) => (props.row ? props.row : "unset")};
    column-gap: ${(props) => (props.column ? props.column : "unset")};
    background: ${(props) => (props.background ? props.background : "unset")};
    border: ${(props) => (props.border ? props.border : "unset")};
    width: ${(props) => (props.width ? props.width : "unset")};
    height: ${(props) => (props.height ? props.height : "unset")};
    position: ${(props) => (props.position ? props.position : "unset")};
    border-radius: ${(props) => (props.radius ? props.radius : "unset")};
    padding: ${(props) => (props.padding ? props.padding : "unset")};
`;
