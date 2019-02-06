import {addToCart, removeFromCart} from "../cart.controller";
import {Product} from "../../models/product";
import {Cart} from "../../models/cart";

let cart: Cart;
let product: Product;

describe("Cart controller", () => {
    beforeEach(() => {
        cart = {
            items: [],
            total: 0
        };
        product = {
            id: 3,
            name: "Bandsaw",
            price: 562.14
        };
    });

    it("Should allow to add a product to the cart", () => {

        addToCart(product, cart);

        const expectedCart = {
            items: [
                {
                    id: 3,
                    name: "Bandsaw",
                    price: 562.14,
                    quantity: 1,
                }
            ],
            "total": 562.14
        };

        expect(cart).toEqual(expectedCart);
    });

    it("Should update product quantity and total when adding a  product that is already in the cart", () => {

        addToCart(product, cart);
        addToCart(product, cart);

        const expectedCart = {
            items: [
                {
                    id: 3,
                    name: "Bandsaw",
                    price: 562.14,
                    quantity: 2,
                }
            ],
            total: 1124.28
        };
        expect(cart).toEqual(expectedCart);
    });

    it("should remove a product from the cart when there is only one of its kind in it", () => {
        addToCart(product, cart);

        removeFromCart(product, cart);
        const expectedCart = {
            items: [],
            total: 0
        };
        expect(cart).toEqual(expectedCart);
    });

    it("should remove a product from the cart when there are multiple of its kind in it", () => {
        addToCart(product, cart);
        addToCart(product, cart);
        addToCart(product, cart);
        removeFromCart(product, cart);

        const expectedCart = {
            items: [
                {
                    id: 3,
                    name: "Bandsaw",
                    price: 562.14,
                    quantity: 2,
                }
            ],
            total: 1124.28
        };
        expect(cart).toEqual(expectedCart);

        removeFromCart(product, cart);
        const expectedCartSingleItem = {
            items: [{
                id: 3,
                name: "Bandsaw",
                price: 562.14,
                quantity: 1
            }],
            total: 562.14
        };
        expect(cart).toEqual(expectedCartSingleItem);

    });
});
