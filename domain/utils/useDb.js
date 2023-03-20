import mongoose from 'mongoose';
import connectDB from '../db';

import { schemaConfig } from '../models/config';

// Indicates which Schemas are used by whom
const config = new Map([['config', schemaConfig]]);

const listSchema = { config };

/** Switch db on same connection pool
 * @return new connection
 */

const connectPromise = connectDB();
export const switchDB = async (dbName, dbSchema) => {
  await connectPromise;
  const db = mongoose.connection.useDb(dbName, {
    useCache: true,
    /* , noListener: true */
  });
  if (dbSchema) {
    // Prevent from schema re-registration
    if (!Object.keys(db.models).length) {
      listSchema[dbSchema].forEach((schema, modelName) => {
        db.model(modelName, schema);
      });
    }
  }

  return db;
};

/**
 * @return model from mongoose
 */
// eslint-disable-next-line require-await
const getDBModel = async (db, modelName) => db.model(modelName);
export const cleanModel = async (tenantId, dynDb) => {
  dynDb.deleteModel(/.*/);
  console.log(
    `tenantId:${tenantId}`,
    `otherDbs:${dynDb.otherDbs.length}`,
    `connection.otherDbs:${mongoose.connection.otherDbs.length}`,
    `relatedDbs:${Object.keys(dynDb.relatedDbs).length}`
  );
};
const multiConnection = async (name, realm) => {
  const dynDb = await switchDB(realm, name);
  const DbModel = await getDBModel(dynDb, name);

  return [DbModel, () => cleanModel(realm, dynDb)];
};

export default multiConnection;
