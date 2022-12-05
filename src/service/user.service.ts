import User, { UserDocument } from '../models/user.model';
import { Omit } from 'lodash';

export async function createUser(
  input: Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>
) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
