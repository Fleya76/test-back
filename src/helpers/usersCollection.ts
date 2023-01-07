import { getConnection, User } from '../db';

const USERS_COLLECTION = 'users';

export type UserValueCanBeUpdated = {
  count?: number;
  lastUpdateAt?: number;
  token?: string;
};

const createUser = (payload: User) => getConnection().get(USERS_COLLECTION).push(payload).write();
const getUserByEmail = (email: string) => getConnection().get(USERS_COLLECTION).find({ email });

const updateUser = (email: string, payload: UserValueCanBeUpdated) => getUserByEmail(email).assign({ payload }).write();

export { createUser, getUserByEmail, updateUser };
