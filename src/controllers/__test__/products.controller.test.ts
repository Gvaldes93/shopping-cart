import {getProductById, getProducts} from "../products.controller";
import products from "./products.fixture.json";

describe("Products controller", () => {

    it("should return list of available products", () => {
        expect(getProducts()).toEqual(products);
    });

    it("should return product by id", () => {
        const expectedProduct = {
            id: 3,
            name: "Bandsaw",
            price: 562.14
        };
        expect(getProductById(3)).toEqual(expectedProduct);
    });

});

