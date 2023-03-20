/* import {  MongoClient, GridFSBucket } from 'mongodb'; */
import mongoose from "mongoose"
export class MongoService {
  static db;
  static bucket;

  static collection(name) {
    return MongoService.db?.collection(name);
  }

  static async connect(uri) {
    /* const client = new MongoClient(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 1
    }); */
   // await client.connect();
   // MongoService.db = client.db();
   // MongoService.bucket = new GridFSBucket(MongoService.db, { bucketName: 'files' });
 // await mongoose.connect(uri, { useNewUrlParser: true });
    const db = mongoose.connection.useDb(uri, {
      useCache: true,
      /* , noListener: true */
    });
  // const { db } = mongoose.connection;
    MongoService.gridFSBucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: 'images'
   });
   MongoService.cleanModel = db.deleteModel(/.*/);
  }
}

