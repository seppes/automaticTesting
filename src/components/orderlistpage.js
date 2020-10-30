import React from "react";
import styled from "@emotion/styled";
import {useOrderListContext} from "../contexts/orderlist_context";
import {ProductLine} from "./product/productline";
import {HashLink} from "react-router-hash-link";
import {StyledLink} from "./ui/link";

const StyledAmount = styled.div`
    position: relative;
    float: left;
    left: 6em;
`;

const StyledRelativeParent = styled.div`
    position: relative;
    margin: 1.2em 0;
    &::after {
        content: "";
        clear: both;
        display: block;
        
    }
`;

export function OrderAmount(props) {
    const {modifyAmountForProductInOrderList} = useOrderListContext();
    const {order} = props;
    return <div>
        <StyledAmount>
            <button onClick={() => modifyAmountForProductInOrderList(order.product, order.amount - 1)}>-</button>
            <input value={order.amount}
                   onChange={(e) => modifyAmountForProductInOrderList(order.product, Number(e.target.value))}/>
            <button onClick={() => modifyAmountForProductInOrderList(order.product, order.amount + 1)}>+</button>
        </StyledAmount>
    </div>;
}

/** when clicked, prop setActiveProduct is called with this product.
 *  if prop setActiveProduct is not set it is not clickable.
 * */
/** @return {null} */
export function OrderLine(props) {
    const {orderLine} = props;

    const product = orderLine.product;
    if (!product) return null;

    return <StyledRelativeParent>
        <ProductLine product={product} showPriceForOrder={true} hideOrderedAmountIndicator={true}/>
        <OrderAmount order={orderLine}/>
    </StyledRelativeParent>;
}

const StyledOrdersDiv = styled.div`
    margin-bottom: calc(5vh + 5em);
`;

function OrderStatusMessage() {
    const {tableNumber, orderList} = useOrderListContext();
    if (!tableNumber) return <div>Scan de QR code op je tafel om te bestellen.</div>;
    if (!orderList.length) return <div>De bestelling is nog leeg. Maak je keuze in
        het <StyledLink><HashLink to={"/menucard#top"}>menu</HashLink></StyledLink>.</div>;
    return <h4>{tableNumber ? `tafel ${tableNumber}` : ""}</h4>

}

export function OrderListPage() {
    const {orderList} = useOrderListContext();

    return <>
        <>
            <h2>Je bestelling </h2>
            <OrderStatusMessage/>
            <StyledOrdersDiv>
                {orderList.map((o) =>
                    <OrderLine key={o.product.id} orderLine={o}/>)
                }
            </StyledOrdersDiv>
        </>
    </>;
}