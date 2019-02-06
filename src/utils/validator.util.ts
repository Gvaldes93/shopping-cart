import {Product} from "../models/product";

export const isValidProduct = (product: Product) => {
    return !!(product &&
        product.id &&
        product.name &&
        product.price &&
        Object.keys(product).length === 3);
};

