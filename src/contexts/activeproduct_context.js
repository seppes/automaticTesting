import React, {createContext, useContext, useMemo, useState} from "react";

const ActiveProductContext = createContext();

export function ActiveProductProvider(props) {
    const [activeProduct, setActiveProduct] = useState(null);
    const [flatProductList, setFlatProductList] = useState([]);
    const api = useMemo(() => ({
            activeProduct,
            setActiveProduct,
            flatProductList,
            setFlatProductList
        }), [activeProduct, setActiveProduct, flatProductList, setFlatProductList]
    );
    return (
        <ActiveProductContext.Provider value={api}>
            {props.children}
        </ActiveProductContext.Provider>
    )
}

export const useActiveProductContext =
    () => useContext(ActiveProductContext);
