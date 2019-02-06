import {ProductDS} from "../data-stores/product.ds";
import {Product} from "../models/product";
import {Cart} from "../models/cart";

export const setProductsHateoasLinks = (products: Product[]) => {

    const productsWithLinks = products.reduce(
        (final, product: Product) => {
            const link = getProductHateoasLinks(product);
            final.push({product, link});
            return final;
        },
        [] as any[]
    );
    return {
        products: productsWithLinks, link: {
            "rel": "self",
            "href": "http://localhost:3000/api/products"
        }
    }
};

export const getProductHateoasLinks = (product: Product) => {
    return [
        {
            "rel": "self",
            "href": `http://localhost:3000/api/products/${product.id}`
        },
    ]
};

export const setCartHateoasLinks = (cart: Cart): any => {

    const cartWithHateoasLinks = cart.items.reduce((final, product: ProductDS) => {
        final.push({
            product,
            link: getProductHateoasLinks(product)
        });
        return final;
    }, [] as any[]);


    return {
        cart: cartWithHateoasLinks,
        total: cart.total,
        link: [
            {
                "rel": "self",
                "href": "http://localhost:3000/api/cart"
            }
        ]
    }
};
