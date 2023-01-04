/** src/controllers/token.ts */
import { Request, Response, NextFunction } from 'express';
import {Secret, sign} from 'jsonwebtoken';

type Token = {
    email: String;
}

// Create a new JWT token
const createToken = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    const email: Token = req.body.email;

    if (!email) {
        return res.status(401).send();
    }

    // return response
    return res.status(200).json({
        token: sign({ email },  process.env.TOKEN_SECRET as Secret, { expiresIn: '1d' }),
    });
};

export default { createToken };