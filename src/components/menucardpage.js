import {Category} from "./product/category";
import {SubCategory} from "./product/subcategory";
import {ProductLine} from "./product/productline";
import React, {useEffect} from "react";
import {FLAT_PRODUCT_DATA} from "../utilities/flat_product_data";
import {useActiveProductContext} from "../contexts/activeproduct_context";

export function MenuCardPage(props) {
    const {setFlatProductList} = useActiveProductContext();
    const {productsData} = props;

    useEffect(() => {
        setFlatProductList(FLAT_PRODUCT_DATA);
    }, [setFlatProductList]);

    return <>
        {productsData.map((c) =>
            <Category key={c.name} category={c}>
                {c.subcategories.map((s) =>
                    <SubCategory key={s.name} subcategory={s}>
                        {s.products.map((p) =>
                            <ProductLine key={p.id} product={p}/>)
                        }
                    </SubCategory>)}
            </Category>)}
    </>;
}