import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {MdFavorite, MdShoppingCart} from "react-icons/md";
import {StyledMenuIconButton} from "./ui/button";
import {BurgerWithMenu} from "./ui/burgermenu";


const StyledNavigation = styled.div`
    height: 64px;
    background-color: ${({theme}) => theme.colors.primaryDark};
    color:  ${({theme}) => theme.colors.primaryLight};
    text-align: center;
    padding: 0.8em 0.2em;
    position: fixed;
    top: 0;
    left: 0; right: 0;
    z-index: 30;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledLink = styled.div`
    a {
      text-decoration: none;
      padding: .2em .5em;
      ${({theme}) => theme.hoverLight};
   }
`;
const StyledCenterDiv = styled.div`
    flex: 1;
    padding: .2em;
`;

const StyledSideBarContent = styled.div`
    padding: 15px 0;
`;

const StyledButtonDiv = styled.div`
    flex: 1;
    text-align: right;
`;

export function Navigation(props) {
    const {categories} = props;
    return <StyledNavigation>
        <BurgerWithMenu>
            {categories.map(c =>
                <StyledSideBarContent key={c.name}>
                    <StyledLink> <HashLink to={`/#${c.name}`}>{c.name}</HashLink></StyledLink>
                </StyledSideBarContent>)}
        </BurgerWithMenu>
        <StyledCenterDiv>

            <StyledLink href="/">
                <Link to="/">Menu</Link>
            </StyledLink>
        </StyledCenterDiv>
        <StyledButtonDiv>
            <Link to="/favorites"><StyledMenuIconButton><MdFavorite/></StyledMenuIconButton></Link>
            <Link to="/ordered"><StyledMenuIconButton><MdShoppingCart/></StyledMenuIconButton></Link>
        </StyledButtonDiv>
    </StyledNavigation>;
}