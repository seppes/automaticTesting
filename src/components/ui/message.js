import React from "react";
import styled from "@emotion/styled";
import {useMessageContext} from "../../contexts/message_context";

const StyledMessage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    display: flex;
    background-color: ${({theme}) => theme.colors.secondaryDark}; 
    color: ${({theme}) => theme.colors.primaryLight};
    z-index: 50;
    align-items: center;
    padding: 8px 15px ;
    min-height: 70px;
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 
                0 4px 15px 0 rgba(0,0,0,0.15);
    transform:  translateY(${({open}) => open ? '0' : '-110%'});
    transition: transform 0.3s ease-in-out;
    @media (min-width: 420px) {
      top: 7px;
      left: unset;
      right: 8px; 
      width: 60vw;
      border-radius: 5px;
    }
`;

export function Message() {
    const {message, setMessage} = useMessageContext();
    return <StyledMessage
        onClick={() => setMessage(null)}
        open={message != null}>
        {message}
    </StyledMessage>
}