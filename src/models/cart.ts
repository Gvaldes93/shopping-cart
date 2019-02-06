import {ProductDS} from "../data-stores/product.ds";

export interface Cart {
    items: ProductDS[],
    total: number
}
