import {Product} from "../models/product";

const products: Product[] = [
    {
        id: 1,
        name: "Sledgehammer",
        price: 125.76
    }, {
        id: 2,
        name: "Axe",
        price: 190.51
    }, {
        id: 3,
        name: "Bandsaw",
        price: 562.14
    }, {
        id: 4,
        name: "Chisel",
        price: 13.9
    }, {
        id: 5,
        name: "Hacksaw",
        price: 19.45
    }
];

export const getProducts = () : Product[] => {
    return products;
};

export const getProductById = (id: number) : Product | undefined => {
    return products.find((product: Product) => product.id === id);
};
