import * as express from "express";
import {NextFunction, Response} from "express";
import {getProductById, getProducts} from "../controllers/products.controller";
import {setProductsHateoasLinks} from "../utils/hateoas.util";

let productRouter: express.Router = express.Router();

productRouter.get('/', (req: Express.Request, res: Response) => {
    const productWithLinks = setProductsHateoasLinks(getProducts());
    res.status(200).json(productWithLinks);

});

productRouter.get('/:id', (req: Express.Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    res.status(200).json(getProductById(id));

});

export {productRouter};
