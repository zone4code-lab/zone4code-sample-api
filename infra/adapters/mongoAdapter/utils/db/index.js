import mongoose from 'mongoose';
import nconf from 'nconf';

import { mongoDbUrl } from '../../../../../config/appSetting';
import { config } from '../../../../../config/configurationAdaptor';
import logger from '../../../../../domain/utils/logger';

// import { MongoService } from '../utils/mongoService';

const envVariables = nconf.get();

mongoose.connection.on('connected', () => {
  logger.info(`Database successfully connected to ${mongoDbUrl}`);
});

mongoose.connection.on('reconnected', () => {
  logger.info(`Database successfully reconnected to ${mongoDbUrl}`);
});

mongoose.connection.on('disconnected', () => {
  logger.info('Connection Disconnected');
});

mongoose.connection.on('close', () => {
  logger.info('Connection Closed');
});

mongoose.connection.on('error', (error) => {
  logger.error(error);
});

const connectDB = () =>
  new Promise((resolve, reject) => {
    mongoose
      .connect(mongoDbUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // autoReconnect: true,
        // reconnectTries: 1000000,
        // reconnectInterval: 3000,
      })
      .then((conn) => {
        logger.log(`[Mongo] mongoose connected to ${config.MONGO_URL} successfully  ✔`);
        //   MongoService.connect('blsm');
        resolve(conn);
      })
      .catch((error) => reject(error));
  });

export default connectDB;
