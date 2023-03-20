import nconf from 'nconf';
import path from 'path';
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();

const envVariables = process.env.NODE_ENV;

export const config = nconf
  .env({
    InputSeparator: '_',
    lowerCase: false,
    parseValues: true,
  })
  .file(envVariables, {
    file: `${envVariables}.json`,
    dir: `${__dirname}/config/env`,
    search: true,
    type: 'json',
    logicalSeparator: '.',
  });

nconf.required(['info', 'NODE_ENV', 'API']);

nconf.defaults({
  'if nothing else': 'use this value',
});

export default config;
