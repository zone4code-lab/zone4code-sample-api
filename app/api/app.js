import Fastify from 'fastify';

import fastifyBlipp from 'fastify-blipp'; // https://github.com/fastify/fastify-blipp
import fastifyCors from 'fastify-cors'; // https://github.com/fastify/fastify-cors
import fastifyHelmet from 'fastify-helmet'; // https://github.com/fastify/fastify-helmet
import fastifyUrlData from 'fastify-url-data'; // https://github.com/fastify/fastify-url-data
import i18n from 'i18n';
import path from 'path';
import fastifySwagger from 'fastify-swagger';
import multipart from '@fastify/multipart';

import connectDB from '../../infra/adapters/mongoAdapter/utils/db';

import { i18nConfig } from '../../config/appSetting';
import requireLogin from '../../domain/utils/requireLogin';
import options from '../../domain/utils/swaggerOptions';
import Permissions from '../../domain/utils/permissions';
import { PROTECTED_URLS, NOT_PROTECTED } from './routes/permissions';
import routes from './routes';


export const dirname = path.resolve();

function build() {
  const DEFAULT_LANGUAGE = i18nConfig.defaultLocale;

  i18n.configure({
    locales: i18nConfig.locales,
    defaultLocale: i18nConfig.defaultLocale,
    directory: path.join(dirname, '.', 'locales'),
  });

  const PERMISSIONS = new Permissions(PROTECTED_URLS).notProtect(...NOT_PROTECTED);

  const fastify = Fastify({
    // maxParamLength: 512,
    bodyLimit: 1048576 * 10,
    ignoreTrailingSlash: true,
    disableRequestLogging: true,
    logger: true,
    prettyPrint: {
      translateTime: true,
      ignore: 'pid, hostname',
    },
  });

  fastify.register(connectDB);
  fastify.register(multipart);
  fastify.register(fastifyBlipp);
  fastify.register(fastifyUrlData);
  fastify.register(fastifyHelmet);

  fastify.register(fastifyCors, {
    origin: ['http://localhost:3000'],
  });
  fastify.register(fastifySwagger, options);

  const middlewareLogin = (request, reply, next) => requireLogin(request, reply, next, PERMISSIONS, fastify);

  const middlewareLanguage = (request, reply, next) => {
    i18n.init(request, reply, next);
    i18n.setLocale(request.headers.local || DEFAULT_LANGUAGE);
  };

  fastify.decorateReply('locals', null);

  routes.forEach((route) => {
    fastify.route({ ...route, url: `/api/v1/:clientId${route.url}`, onRequest: middlewareLanguage, preHandler: null });
  });

  fastify.get('/healthy/:clientId', () => ({ status: 'ok' }));

  return fastify;
}
export default build;
