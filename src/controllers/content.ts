/** src/controllers/content.ts */
import { Request, Response, NextFunction } from 'express';
import justify from "../helpers/justify";

type Payload = {
    content: string;
    length: number;
}

/** Justify content receive by payload */
const justifyContent = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    const { content = "", length }: Payload = req.body;

    if (!content) {
        return res.status(401).send();
    }

    // CREATE AND USED A DATABASE IN MEMORY
    // FIND USER BY EMAIL AND RECEIVE WORD ALREADY USED IN THE DATE
    // CHECK IF THE LAST DATE SAVE IS TODAY
        // IF THE LASE DATE IS NOT TODAY RESET THE COUNT AT 0 AND SAVE IT
    // COUNT THE WORD USED IN SENTENCE
    // ADD COUNT TO THE WORD ALREAY USED AND CHECK IF THIS VALUE IS UNDER THAN 80 000
    // RECEIVE CONTENT AND NUMBER AND NEXT JUSTIFY IT
    // SAVE NEW VALUE AND THE LAST SAVE DATE

    // return response
    return res.status(200).send(justify(content, length));
};

export default { justifyContent };