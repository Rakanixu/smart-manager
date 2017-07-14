import { UserAccountDB } from './user-account.db';
import { UserAccount } from './user-account.model';

const userAccountDB = new UserAccountDB();

export async function getUsers() {
  return userAccountDB.getUsers();
}

export async function createUser(userAccount: UserAccount) {
  return userAccountDB.createUser(userAccount);
}

export async function getUser(userEmail: string) {
  return userAccountDB.getUser(userEmail);
}

export async function deleteUser(userEmail: string) {
  return userAccountDB.deleteUser(userEmail);
}
