import styled from "@emotion/styled";


/** styling for a  span that contains a <a>.
 * The <a> can also be a React-Router <Link> or <HashLink>
 */
export const StyledLink = styled.span`
    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.primaryLight};
        background-color: ${({theme}) => theme.colors.primaryDark};
        transition: color 0.3s linear;
    }

    &:hover, :focus, :active {
        outline: 0;
    }
    &:hover {
        transition: all .2s ease-in-out;
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    &:active {
        background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%) center/15000%;
        transition: background 0s;
    }
`;
