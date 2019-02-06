import {setProductsHateoasLinks} from "../hateoas.util";
import products from "./products.fixture.json";
import expectedProducts from "./expectedProducts.fixture.json";

describe("Hateoas util", () => {
    it("should set HATEOAS links to product list", () => {
        const productsWithLinks = setProductsHateoasLinks(products);
        expect(productsWithLinks).toEqual(expectedProducts);
    });
});
