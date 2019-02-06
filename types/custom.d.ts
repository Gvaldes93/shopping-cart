declare namespace Express {
    export interface Request {
        params: any;
        body: any;
        session?: any
    }
}
