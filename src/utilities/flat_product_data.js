import * as PRODUCTS from "../data/products_data";

function getFlatProductData(productData) {
    const allSubCats = productData.map(c => c.subcategories).flat();
    return allSubCats.map(s => s.products).flat();
}
export const FLAT_PRODUCT_DATA = getFlatProductData(PRODUCTS.PRODUCTS_DATA);
