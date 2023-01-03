/** src/controllers/content.ts */
import { Request, Response, NextFunction } from 'express';
import {Secret, sign} from 'jsonwebtoken';
import readConfiguration from "../helpers/readConfiguration";

type Payload = {
    content: String;
}

// Justify content receive by payload
const justifyContent = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    console.log('req', req.body)
    const { content }: Payload = req.body;

    if (!content) {
        return res.status(401).send();
    }
    // return response
    return res.status(200).send('test');
};

export default { justifyContent };