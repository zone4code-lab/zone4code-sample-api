/* eslint-disable no-console */
import fs from 'fs';

// const config = require(rootPath + "config");
import { configApp } from '../../config/appSetting';

const logDirectory = `${configApp.projectDir}/${configApp.logDir}`;

// Ensure log directory exists
if (!fs.existsSync(logDirectory)) {
  console.log(logDirectory);
  fs.mkdirSync(logDirectory);
}

function appendMessage(fileName, message) {
  fs.appendFileSync(`${logDirectory}/${fileName}`, message);
}

function getDate() {
  return new Date().toUTCString();
}

function printStackTrace(error, date) {
  if (error && error.stack && (error && error.noLogging) !== true) {
    console.error(`Error stack: ${date} *** `);
    console.error(error.stack);
    const innerError = error.inner;

    if (innerError && innerError.stack) {
      console.error(`Inner error stack: ${date} *** `);
      console.error(innerError.stack);
    }
  }
}

function stringifyError(error) {
  let details = '';

  if (error.name === 'ValidationError') {
    details = JSON.stringify(error.inner, null, 2);
  }

  return (
    `Type: ${error.name}. Code: ${error.code}. Status: ${error.status}.\n` +
    `Short message: ${error.message}.\n${error.debugMessage ? `Debug message: ${error.debugMessage}\n` : ''}${
      error.data ? `Arguments data: ${JSON.stringify(error.data, null, 2)}\n` : ''
    }${error.inner ? `Details: ${details || error.inner.message}` : ''}`
  );
}

export default {
  stringifyError,

  log(message) {
    const date = getDate();

    console.log(`Log: ${date} *** ${message}`);
    appendMessage('log.log', `Log: ${date} *** ${message}\n`);
  },

  error(message, error) {
    const date = getDate();
    const errorMessage = error ? `;\n${stringifyError(error)}` : '';

    console.error(`Error: ${date} *** ${message}${errorMessage}`);
    printStackTrace(error, date);
    appendMessage('error.log', `Error: ${date} *** ${message}${errorMessage}\n`);
  },

  warning(message, error) {
    const date = getDate();

    console.log(`Warning: ${date} *** ${message}`);
    const errorMessage = error ? `;\n${stringifyError(error)}` : '';

    printStackTrace(error, date);
    appendMessage('warning.log', `Date: ${date}; ${message}${errorMessage}\n`);
  },

  info(message) {
    const date = getDate();

    console.info(`Info: ${date} *** ${message}`);
    appendMessage('info.log', `Date: ${date}; ${message}\n`);
  },

  trace(message) {
    const date = getDate();

    console.info(`Trace: ${date} *** ${message}`);
    appendMessage('trace.log', `Date: ${date}; ${message}\n`);
  },

  debug(message) {
    const date = getDate();

    console.info(`Debug: ${date} *** ${message}`);
    appendMessage('debug.log', `Date: ${date}; ${message}\n`);
  },
};
/* eslint-enable no-console */
