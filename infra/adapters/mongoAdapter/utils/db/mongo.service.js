import {  MongoClient, GridFSBucket } from 'mongodb';

export class MongoService {
  static db;
  static bucket;

  static collection(name) {
    return MongoService.db?.collection(name);
  }

  static async connect(uri) {
    const client = new MongoClient(uri);
    await client.connect();
    MongoService.db = client.db();
    MongoService.bucket = new GridFSBucket(MongoService.db, { bucketName: 'files' });
  }
}
