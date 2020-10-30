import React from "react";
import styled from "@emotion/styled";

const StyledNote = styled.div`
  color: ${({theme}) => theme.colors.secondaryDark};
  font-size: smaller;
`;

/** @return {null} */
export function Note(props) {
    const {note, className} = props;
    if (!note) return null;
    return <StyledNote className={className}>{note}</StyledNote>
}

