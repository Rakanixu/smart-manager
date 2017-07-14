import { UserAccountDB } from './user-account.db';
import { UserAccount } from './user-account.model';
import { hash } from '../../utils/auth';

const userAccountDB = new UserAccountDB();

export async function getUsers() {
  return userAccountDB.getUsers();
}

export async function createUser(userAccount: UserAccount) {
  userAccount.password = hash(userAccount.password);
  return userAccountDB.createUser(userAccount);
}

export async function getUser(userEmail: string) {
  return userAccountDB.getUser(userEmail);
}

export async function deleteUser(userEmail: string) {
  return userAccountDB.deleteUser(userEmail);
}
