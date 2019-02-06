import {setCartHateoasLinks, setProductsHateoasLinks} from "../hateoas.util";
import products from "./products.fixture.json";
import expectedProducts from "./expectedProducts.fixture.json";

import cart from "./cart.fixture.json";
import expectedCart from "./expectedCart.fixture.json";

describe("Hateoas util", () => {
    it("should set HATEOAS links to product list", () => {
        const productsWithLinks = setProductsHateoasLinks(products);
        expect(productsWithLinks).toEqual(expectedProducts);
    });

    it("should set HATEOAS links to cart", ()=> {
        const cartWithLinks = setCartHateoasLinks(cart);
        expect(cartWithLinks).toEqual(expectedCart);
    });
});
