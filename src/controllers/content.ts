/** src/controllers/content.ts */
import { Request, Response, NextFunction } from 'express';
import justify from "../helpers/justify";
import { getUserByEmail, updateUser } from "../helpers/usersCollection"

type DecodedToken = {
    email: string;
}
type Payload = {
    content: string;
    decodedToken: DecodedToken;
    length: number;
}

/** Justify content receive by payload and verify if the usage is correct or not  */
const justifyContent = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    const { content = "", decodedToken, length }: Payload = req.body;

    if (!content) {
        return res.status(401).send();
    }

    // Find user by email
    const userFound = getUserByEmail(decodedToken.email).value()

    const today = new Date().setHours(0, 0, 0, 0);
    const thatDay = new Date(userFound.lastUpdateAt).setHours(0, 0, 0, 0);
    const combinedCount = userFound.count + content.split(" ").length
    if(combinedCount <  (process.env.USAGE || 80000)){
        if(today === thatDay){
            updateUser(decodedToken.email, { count: combinedCount, lastUpdateAt: Date.now()});
        } else {
            updateUser(decodedToken.email, { count: content.split(" ").length, lastUpdateAt: Date.now()})
        }
        return res.status(200).send(justify(content, length));
    } else {
        return res.status(402).send("Payment Required");
    }
};

export default { justifyContent };