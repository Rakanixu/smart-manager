import { MongoDB } from '../../database/index';
import { UserAccount } from './user-account.model';
import { UserAccountKeys } from './user-account.model';
import { UserAccountCollectionSchema } from './user-account.model';

export class UserAccountDB {
  static collection: string = 'user_account';
  private db: MongoDB;

  constructor() {
    this.db = new MongoDB(UserAccountCollectionSchema, UserAccountDB.collection);
  }

  public async getUsers() {
    const sort = {};
    sort[UserAccountKeys.username] = -1;

    return this.db.searchDocuments({}, sort, UserAccountDB.collection);
  }

  public async createUser(userAccount: UserAccount) {
    userAccount._id = userAccount.email;

    return this.db.insertDocument(userAccount, UserAccountDB.collection);
  }

  public async getUser(userEmail: string) {
    const match = {};
    match[UserAccountKeys.email] = userEmail;

    return this.db.searchDocuments(match, {}, UserAccountDB.collection);
  }

  public async deleteUser(userEmail: string) {
    const match = {};
    match[UserAccountKeys.email] = userEmail;

    return this.db.deleteDocument(match, UserAccountDB.collection);
  }
}
