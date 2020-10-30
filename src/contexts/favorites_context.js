import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {useLocalStorage} from "../utilities/localstorage";
import {FLAT_PRODUCT_DATA} from "../utilities/flat_product_data";

const FavoritesContext = createContext();
/** favorites: saved in localStorage: array of product-ids
 *  used in program: array of products
 */
function convertFavoritesFromLocalStorage(preloadedStateWithProductIds) {
    return preloadedStateWithProductIds.map((id) => FLAT_PRODUCT_DATA.find((p) => p.id === id));
}

function convertFavoritesToLocalStorage(favorites) {
    return favorites.map((p) => p.id);
}

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useLocalStorage("favorites", [], convertFavoritesFromLocalStorage, convertFavoritesToLocalStorage);

    const isFavorite = useCallback((product) => {
        return product && favorites.find((p) => product.id === p.id);
    }, [favorites]);

    const toggleProductIsFavorite = useCallback((product) => {
        let newFavorites;
        if (isFavorite(product))
            newFavorites = favorites.filter((p) => product.id !== p.id);
        else
            newFavorites = [...favorites, product];
        setFavorites(newFavorites);
    }, [isFavorite, favorites, setFavorites]);

    const api = useMemo(
        () => ({
            favorites,
            isFavorite,
            toggleProductIsFavorite
        }),
        [favorites, isFavorite, toggleProductIsFavorite]
    );

    return (
        <FavoritesContext.Provider value={api}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext);

