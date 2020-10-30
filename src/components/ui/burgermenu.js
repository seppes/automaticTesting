import styled from "@emotion/styled";
import React, {useState} from "react";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.2em;
  height: 1.2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all .2s ease-in-out;
    box-shadow: inset 0 0 5px 0 #ffffff;
  }
  
  div { /*the 3 lines*/
    width: 1.2em;
    height: 0.1em;
    background-color: ${({theme}) => theme.colors.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 30;
    
    :first-of-type {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

function Burger(props) {
    const {open, setOpen} = props;
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

const StyledNavMenu = styled.nav`
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
    justify-content: center;
    background-color: ${({theme}) => theme.colors.primaryDark};
    height: 100vh;
    text-align: left;
    padding: 2em;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    
    a {
        transition: color 0.3s linear;
    }
`;

function NavMenu(props) {
    const {open} = props;
    return (
        <StyledNavMenu open={open}>
            {props.children}
        </StyledNavMenu>
    )
}
//note: position has to be relative so that the InfoBox y-positioning works correctly
const StyledRelativeParent = styled.div`
    position: relative;
    padding: 0.2em;
    flex: 1;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(23, 23, 23, .04);
`;

/***
 * This Component is reusable in another application
 */
export function BurgerWithMenu(props) {
    const [open, setOpen] = useState(false);
    return <StyledRelativeParent>
        <Burger open={open} setOpen={setOpen}/>
        {open && <StyledOverlay onClick={() => setOpen(false)}/>}
        <NavMenu open={open} setOpen={setOpen}>
            {props.children}
        </NavMenu>
    </StyledRelativeParent>;
}