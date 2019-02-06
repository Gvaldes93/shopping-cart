import * as express from "express";
import {Response} from "express";
import {productRouter} from "./products.routes";
import {cartRouter} from "./cart.routes";

let router: express.Router = express.Router();
router.get('/', (req: Express.Request, res: Response) => {
    const appLinks = {
        "link": [
            {
                "rel": "products",
                "href": `http://localhost:3000/api/products`
            },
            {
                "rel": "cart",
                "href": `http://localhost:3000/api/cart`
            }
        ]
    };

    res.json(appLinks);
});

router.use('/cart', cartRouter);
router.use('/products', productRouter);

export {router};
