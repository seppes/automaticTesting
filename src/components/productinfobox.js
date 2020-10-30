import React from "react";
import styled from "@emotion/styled";
import {InfoBox} from "./ui/infobox";
import {ProductLine} from "./product/productline";
import {MdFavorite, MdFavoriteBorder, MdMessage, MdAddShoppingCart} from "react-icons/md";
import {StyledInfoBoxIconButton} from "./ui/button";
import {useMessageContext} from "../contexts/message_context";
import {useActiveProductContext} from "../contexts/activeproduct_context";
import {useFavoritesContext} from "../contexts/favorites_context";
import {useOrderListContext} from "../contexts/orderlist_context";

const ProductInfoBoxContent = styled.div`
  position:relative;  
  padding: 2em 1em;
  height: 100%;
`;

const StyledBrewery = styled.div`
  padding: 1em 0 0 0;
  text-align: right;
  font-weight: bold;
  font-size: smaller;
`;

const StyledProductInfo = styled.div`
  padding: 1em 0;
  text-align: justify;
  font-size: smaller;
`;

const StyledButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
`;

function FavoriteButton() {
    const {activeProduct} = useActiveProductContext();
    const {isFavorite, toggleProductIsFavorite} = useFavoritesContext();
    const isProductFavorite = isFavorite(activeProduct);

    return <StyledInfoBoxIconButton onClick={() => toggleProductIsFavorite(activeProduct)}
                                    color={isProductFavorite && "favoriteRed"}>
        {isProductFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
    </StyledInfoBoxIconButton>;
}

function MessageButton() {
    const {setMessage} = useMessageContext();
    const {activeProduct} = useActiveProductContext();
    return <StyledInfoBoxIconButton
        onClick={() => setMessage(`dit is een message over ${activeProduct.name}!`)}>
        <MdMessage/>
    </StyledInfoBoxIconButton>;
}


function OrderButton() {
    const {activeProduct} = useActiveProductContext();
    const {incrementProductInOrderList} = useOrderListContext();
    return <StyledInfoBoxIconButton
        onClick={() => incrementProductInOrderList(activeProduct)}>
        <MdAddShoppingCart/>
    </StyledInfoBoxIconButton>;

}

/** @return {null} */
function Brewery() {
    const {activeProduct} = useActiveProductContext();
    if (!activeProduct || !activeProduct.brewery) return null;
    return <StyledBrewery>{activeProduct.brewery}</StyledBrewery>

}

/** @return {null} */
function ProductInfo() {
    const {activeProduct} = useActiveProductContext();
    if (!activeProduct || !activeProduct.info) return null;
    return <StyledProductInfo>{activeProduct.info}</StyledProductInfo>

}

export function ProductInfoBox() {
    const {activeProduct, setActiveProduct, flatProductList} = useActiveProductContext();

    function prevActiveProduct() {
        const index = flatProductList.findIndex((p) => p.id === activeProduct.id);
        const prevProduct = flatProductList[(index - 1 >= 0) ? index - 1 : flatProductList.length - 1];
        setActiveProduct(prevProduct);
    }

    function nextActiveProduct() {
        const index = flatProductList.findIndex((p) => p.id === activeProduct.id);
        const nextProduct = flatProductList[(index + 1) % flatProductList.length];
        setActiveProduct(nextProduct);
    }

    return <InfoBox isInfoBoxOpen={activeProduct != null}
                    closeInfoBox={() => setActiveProduct(null)}
                    prevInfoBoxPage={prevActiveProduct}
                    nextInfoBoxPage={nextActiveProduct}>
        {activeProduct &&
        <ProductInfoBoxContent>
            <ProductLine product={activeProduct} isNotClickable doNotShowFavorite/>
            <Brewery/>
            <ProductInfo/>
            <StyledButtonDiv>
                <OrderButton/>
                <MessageButton/>
                <FavoriteButton/>
            </StyledButtonDiv>
        </ProductInfoBoxContent>
        }
    </InfoBox>
}