import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useOrderListContext} from "../contexts/orderlist_context";
import {OrderListPage} from "./orderlistpage";

export function TablePage() {
    const {tableNumberFromUrl} = useParams();
    const {setTableNumber} = useOrderListContext();

    useEffect(() => {
        setTableNumber(tableNumberFromUrl);
    }, [tableNumberFromUrl, setTableNumber]);

    return <OrderListPage/>;
}

