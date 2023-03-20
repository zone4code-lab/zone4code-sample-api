import urlParse from 'url-parse';
import 'dotenv/config';
import path from 'path';
import nconf from 'nconf';
import './configurationAdaptor.js';

const envVariables = nconf.get();

export const isProduction = process.env.NODE_ENV === 'production';

export const currentProtocol = isProduction ? 'https' : 'http';

export const apiPort = envVariables.API.API_PORT || 5000;

export const keycloak = {
  KEYCLOAK_URL: envVariables.SYSTEM.KEYCLOAK_URL,
  KEYCLOAK_CLIENT_ID: envVariables.SYSTEM.KEYCLOAK_CLIENT_ID,
};

// export const hostname = 'localhost'

// Build url function
export const buildUrl = ({ protocol = currentProtocol, hostname = 'localhost', extraArgs = {} } = {}) => {
  if (!protocol || !hostname) {
    throw new Error('You should at least set the protocol and the hostname');
  }

  const urlBuilder = urlParse();
  urlBuilder.set('protocol', protocol);
  urlBuilder.set('hostname', hostname);

  // eslint-disable-next-line no-prototype-builtins
  if (extraArgs.hasOwnProperty('url')) {
    return extraArgs.url;
  }

  Object.keys(extraArgs).forEach((argName) => {
    urlBuilder.set(argName, extraArgs[argName]);
  });

  return urlBuilder.toString();
};

// Api Url build
export const apiUrl = buildUrl({
  hostname: envVariables.API.API_HOST,
  extraArgs: {
    port: envVariables.API.API_PORT,
  },
});

// Database Url build ?????
export const mongoDbUrl = buildUrl({
  protocol: 'mongodb',
  hostname: envVariables.DB.mongodb.DB_HOST,
  extraArgs: {
    url: envVariables.DB.mongodb.URL,
    pathname: envVariables.DB.mongodb.DB_NAME,
    port: envVariables.DB.mongodb.DB_PORT,
    username: envVariables.DB.mongodb.DB_USER,
    password: envVariables.DB.mongodb.DB_PASSWORD,
    query: JSON.parse(envVariables.DB.mongodb.DB_QUERY || '{}'),
  },
});

export const mongoDbBaseUrl = envVariables.DB.mongodb.BASE_URL;

export const configApp = {
  projectDir: path.resolve(),
  logDir: 'log',
  hostname: '0.0.0.0',
  mode: process.env.NODE_ENV,
  gracefulShutdownTimeout: 1000,
  appVersion: process.env.APP_VERSION,
  appName: process.env.APP_NAME,
  appDescription: process.env.APP_DESCRIPTION,
};

export const i18nConfig = {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
};
