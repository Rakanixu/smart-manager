import { config } from '../config/index';
const mongoClient = require('mongodb').MongoClient;

export class MongoDB {
  static url: string = config.mongoDBUrl;
  private conn: any = null;

  constructor(schema: any, collectionName: string) {
    this.openConn(this.createCollection.bind(this, schema, collectionName));
  }

  public async insertDocument(document: any, collectionName: string) {
    document.timestamp = new Date().getTime();
    return new Promise((resolve, reject) => {
      this.conn.collection(collectionName).insertOne(document, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(document);
        }
      });
    });
  }

  public async searchDocuments(rule: any, sort: any, collectionName: string, returnId?: boolean) {
    const filter = { _id: 0 };
    if (returnId) {
      delete filter._id;
    }

    return new Promise((resolve, reject) => {
      this.conn.collection(collectionName).find(rule, filter).sort(sort).toArray((err: any, docs: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  public async deleteDocument(rule: any, collectionName: string) {
    return new Promise((resolve, reject) => {
      this.conn.collection(collectionName).deleteOne(rule, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  private createCollection(schema: any, collectionName: string) {
    this.conn.createCollection(collectionName, schema);
  }

  private openConn(cb: Function) {
    if (this.conn == null) {
      mongoClient.connect(MongoDB.url, (err: any, db: any) => {
        if (err) {
          console.error('ChatDB connectection error:', err);
        }
        console.log('Connected to MongoDB');
        this.conn = db;

        cb();
      });
    }
  }

  private closeConn() {
    if (this.conn) {
      this.conn.close();
      this.conn = null;
    }
  }
}
