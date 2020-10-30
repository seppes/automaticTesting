import React, {useEffect} from "react";
import {ProductLine} from "./product/productline";
import {useFavoritesContext} from "../contexts/favorites_context";
import {useActiveProductContext} from "../contexts/activeproduct_context";

export function FavoritesPage() {
    const {setFlatProductList} = useActiveProductContext();
    const {favorites} = useFavoritesContext();

    useEffect(() => {
        setFlatProductList(favorites);
    }, [setFlatProductList, favorites]);

    return <>
        <h2>Je favorieten</h2>
        {!favorites.length ? "Je hebt nog geen favorieten." : null}
        {favorites.map((p) =>
            <ProductLine key={p.id} product={p} doNotShowFavorite/>)}

    </>;

}