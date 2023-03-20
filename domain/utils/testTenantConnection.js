import { createServer } from 'http';

import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1/test';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const useDbOptions = {
  // this causes number of otherDbs to go up, relatedDbs stays the same
  useCache: false,

  // this causes number of relatedDbs to go up in addition to otherDbs, even worse
  // useCache: true
};

const Property = new mongoose.Schema({
  key: { type: String, required: true },
  type: { type: String, required: true },
});
const Unlocked = new mongoose.Schema({
  active: { type: Boolean },
  unlockedAt: { type: Date },
});
const Field = new mongoose.Schema({
  name: String,
  active: { type: Boolean, required: true },
  subject: String,
  properties: [Property],
  unlocked: Unlocked,
  updatedAt: { type: Date, required: true },
});
const MySchema = new mongoose.Schema({
  groupId: { type: String, unique: true },
  fieldMap: { type: Map, of: Field },
});

const connectPromise = mongoose.connect(mongoUrl, connectOptions);

async function database(tenantId) {
  await connectPromise;

  // the following line leaks memory
  const tenantConnection = mongoose.connection.useDb(`db_${tenantId}`, useDbOptions);

  // this significantly increases memory consumed by tenantConnection,
  // because internally connection keeps an collection of all its models.
  const unusedModelToIncreaseMemoryUsage = tenantConnection.model('foo', MySchema);

  console.log(
    `tenantId:${tenantId}`,
    `otherDbs:${tenantConnection.otherDbs.length}`,
    `connection.otherDbs:${mongoose.connection.otherDbs.length}`,
    `relatedDbs:${Object.keys(tenantConnection.relatedDbs).length}`
  );

  return tenantConnection;
}

async function handleRequest(id) {
  const conn = await database(id);
  const res = {
    id,
    otherDbsLength: conn.otherDbs.length,
    relatedDbsLength: Object.keys(conn.relatedDbs).length,
  };
  await conn.close();
  return res;
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, 'https://127.0.0.1/');
  if (url.pathname.startsWith('/ping')) {
    const result = await handleRequest(url.searchParams.get('id'));
    response.setHeader('content-type', 'application/json');
    response.write(JSON.stringify(result));
    response.end();
  }
});
server.listen(process.env.PORT || 9000);
