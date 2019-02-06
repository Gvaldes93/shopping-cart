import {Cart} from "../models/cart";
import {Product} from "../models/product";
import {ProductDS} from "../data-stores/product.ds";


const getProductPositionInCart = (cart: Cart, product: Product) : number => {
    if(cart.items.length == 0) {
        return -1;
    }
    return cart.items.findIndex((item: ProductDS) => item.id === product.id);
};

const roundToTwoDecimals = (num: number): number => {
    return parseFloat(num.toFixed(2));
};

export const addToCart = (product: Product, cart: Cart) => {
    const productIndex = getProductPositionInCart(cart, product);
    if (productIndex > -1) {
        cart.items[productIndex].quantity!++;
        cart.total += cart.items[productIndex].price;
    } else {
        let productDS: ProductDS = Object.assign({quantity: 1}, product);
        cart.items.push(productDS);
        cart.total = cart.total + product.price;
    }
    cart.total = roundToTwoDecimals(cart.total);

};

export const removeFromCart = (product: Product, cart: Cart) => {
    const productPositionInCart = getProductPositionInCart(cart, product);
    if (productPositionInCart > -1) {
        const productDS: ProductDS = cart.items[productPositionInCart];

        if (productDS.quantity === 1) {
            cart.items.splice(productPositionInCart, 1);
        } else if (productDS.quantity && productDS.quantity > 1) {
            cart.items[productPositionInCart].quantity!--;
        }

        cart.total -= productDS.price;
        cart.total = roundToTwoDecimals(cart.total);
    }
};
