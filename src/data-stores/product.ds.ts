import {Product} from "../models/product";

export interface ProductDS extends Product {
    quantity?: number;
}
