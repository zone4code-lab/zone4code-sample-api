import fastifyApp from './app';
/* import db from './api/db/index'; */
import { apiPort } from '../../config/appSetting.js';

fastifyApp().then((fastify) => {
  fastify.listen(apiPort, '0.0.0.0', (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.swagger();
    fastify.log.info(`server  listening on ${address.port}`);
    fastify.blipp();
  });
});
