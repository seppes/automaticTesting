import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledSubCategoryNote = styled(Note)`
  padding: 0 0 0.5em 0;
`;


export function SubCategory(props) {
    const {subcategory} = props;
    return <div>
        <h2>{subcategory.name}</h2>
        <StyledSubCategoryNote note={subcategory.note}/>
        {props.children}
    </div>;
}