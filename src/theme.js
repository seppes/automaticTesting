const colors = {
    primaryDark: '#000000',
    primaryLight: '#ffffff',
    secondaryDark: '#a21212',
    grey: '#888888',
    favoriteRed: '#d01616',
};

const hoverGeneral = `
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    &:hover, :focus, :active {
        outline: 0;
    }
    &:hover {
        transition: all .2s ease-in-out;
    }
    &:active {
        transition: background 0s;
    }
`;

const hoverLight = `
    ${hoverGeneral};
    color: ${colors.primaryLight};
    &:hover {
        box-shadow: inset 0 0 5px 0 #ffffff;
    }
    &:active {
        background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%) center/15000%;
        color: black;
    }
`;

const hoverDark = `
    ${hoverGeneral};
    color: ${colors.grey};
    &:hover {
        box-shadow: inset 0 0 2px 0 #888888;
    }
    &:active {
        background: #eeeeee radial-gradient(circle, transparent 1%, #eeeeee 1%) center/15000%;
        color: black;
    }
`;


export const theme = {
    colors,
    hoverLight,
    hoverDark,
};
