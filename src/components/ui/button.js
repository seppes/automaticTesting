import styled from "@emotion/styled";

export const StyledMenuIconButton = styled.button`
    font-size: 25px;
    width: 1.4em;
    height: 1.4em;
    margin: 0 .3vh;
    border: 0;
    padding: .2em .1em 0 .1em;
    ${({theme}) => theme.hoverLight};
`;

export const StyledInfoBoxIconButton = styled.button`
    font-size: calc(10px + 4vmin);
    padding: .3em;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: ${({theme}) => theme.colors.primaryDark};
    color: ${props =>  props.theme.colors[props.color || "primaryLight"]};
    margin: .2em;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    width: 1.6em;
    height: 1.6em;

    transition: box-shadow .2s ease, background-color .2s ease;

    &:hover, :focus, :active {
        outline: 0;
    }
    &:hover {
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    &:active {
        background: #565656 radial-gradient(circle, transparent 1%, #565656 1%) center/15000%;
    }
`;

