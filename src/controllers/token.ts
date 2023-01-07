/** src/controllers/token.ts */
import { Request, Response, NextFunction } from 'express';
import { Secret, sign } from 'jsonwebtoken';
import { User } from '../db';
import { createUser, getUserByEmail, updateUser } from '../helpers/usersCollection';

/** Create a specific token for auth and register or update a new user in DB */
const createToken = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  if (!email) {
    return res.status(401).send();
  }

  try {
    // Create new JWT token
    const token: string = sign({ email }, process.env.TOKEN_SECRET as Secret, { expiresIn: '1d' });
    const newUser: User = { email, token, count: 0, lastUpdateAt: Date.now() };

    // Find user by email
    const userFound = getUserByEmail(email).value();

    // If Users collection already have
    if (userFound) {
      // Update the token for the current user
      updateUser(email, { token });
    } else {
      // Create new user in DB
      createUser(newUser);
    }

    return res.status(200).json({
      token,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default { createToken };
