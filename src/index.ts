import express from "express";
import {router} from "./routes/routes";
import session from "express-session";
import bodyParser from "body-parser";

const app: express.Application = express();
const jsonParser = bodyParser.json();

const sess = {
    secret: '9c2dd9b619bc2b4d6ba9fde41d41d686',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    name: 'shoppingSessionID',
    cookie: {maxAge: 60000}
};

app.use(jsonParser);
app.use(session(sess));
app.use('/api/', router);

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))
