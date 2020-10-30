import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";
import {MdFavorite} from "react-icons/md";
import {useActiveProductContext} from "../../contexts/activeproduct_context";
import {useFavoritesContext} from "../../contexts/favorites_context";

const StyledProductNote = styled(Note)`
  padding: 0 1.5em 0.5em 0;
`;

const StyledProductLine = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 .3em 0;
  ${(props) => props.onClick ? 'cursor: pointer' : null};
`;

const StyledProductName = styled.div`
    flex: 6;
`;

const StyledProductDescription = styled.span`
  font-size: 0.6em;
`;

const StyledProductPrice = styled.div`
    flex: 2;
    text-align: right;
`;

/** @return {null} */
function ProductDescription(props) {
    const {product} = props;
    if (!product.size && !product.percentage) return null;
    const desc = " • "
        + (product.size && product.size + "CL ")
        + (product.percentage && product.percentage + "%");
    return <StyledProductDescription>{desc}</StyledProductDescription>
}

const StyledProductIndicator = styled.div`
  font-size: 0.6em;
  padding: 0.45em 0;
  width: 2vw;
  color: ${({theme}) => theme.colors.secondaryDark};
  text-align: right;

`;

/** @return {null} */
export function ProductLine(props) {
    const {setActiveProduct} = useActiveProductContext();
    const {isFavorite} = useFavoritesContext();
    const {product, isNotClickable, doNotShowFavorite} = props;
    return <>
        <StyledProductLine onClick={isNotClickable ? undefined : () => setActiveProduct(product)}>
            <StyledProductName>
                {product.name}
                <ProductDescription product={product}/>
            </StyledProductName>
            <StyledProductPrice>{product.price.toFixed(2)} &euro;</StyledProductPrice>
            <StyledProductIndicator>{!doNotShowFavorite && isFavorite(product) && <MdFavorite/>}</StyledProductIndicator>
        </StyledProductLine>
        <StyledProductNote note={product.note}/>
    </>;
}