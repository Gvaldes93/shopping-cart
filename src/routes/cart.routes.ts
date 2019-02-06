import * as express from "express";
import {NextFunction, Request, Response} from "express";
import {addToCart, removeFromCart} from "../controllers/cart.controller";
import {Product} from "../models/product";
import {isValidProduct} from "../utils/validator.util";
import {Cart} from "../models/cart";
import {setCartHateoasLinks} from "../utils/hateoas.util";

const cartRouter = express.Router();


const validateRequestData = (req: Express.Request, res: Response) => {
    if (!isValidProduct(req.body)) {
        res.json("The Product object provided doesn't met the expected format").status(400);
    }
};


cartRouter.use('/', (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.cart) {
        req.session.cart = {
            items: [], total: 0
        } as Cart;
    }
    next();
});

cartRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json(setCartHateoasLinks(req.session.cart));

});

cartRouter.put('/', (req: Request, res: Response, next: NextFunction) => {
    validateRequestData(req, res);
    addToCart(req.body as Product, req.session.cart as Cart);
    res.json(setCartHateoasLinks(req.session.cart));

});

cartRouter.delete('/', (req: Request, res: Response, next: NextFunction) => {
    validateRequestData(req, res);
    try {
        removeFromCart(req.body as Product, req.session.cart as Cart);
        res.json(setCartHateoasLinks(req.session.cart));
    }catch(e) {
        res.status(400).json({ error: e.message})
    }

});


export {cartRouter};
