import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import readConfiguration from "../helpers/readConfiguration";
export interface CustomRequest extends Request {
    body: Object | JwtPayload;
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new Error();
        }

        const configuration = await readConfiguration();
        const tokenSecret = configuration.private.tokenSecret;

        const decodedToken = jwt.verify(token, tokenSecret as Secret);
        (req as CustomRequest).body = {
            ...req.body,
            decodedToken
        };

        next();
    } catch (err) {
        res.status(401).send('Please create a new API KEY with the api/token/create route.');
    }
};