import util from 'util';

import logger from './logger';

function logError(error) {
  logger.debug(logger.stringifyError(error) + (error.inner ? `\nMore details: ${logger.stringifyError(error.inner)}` : ''));
}
// UnauthorizedError
function UnauthorizedError({ code, error, message, debugMessage, status, data, noLogging }) {
  const me = this;
  const { constructor } = me;

  Error.captureStackTrace(me, constructor);

  me.name = constructor.name;
  me.message = message;
  me.code = code;
  me.debugMessage = debugMessage;
  me.status = status || 403; // Forbidden
  // 401 Unauthorized: If the request already included authorization credentials, then the
  // 401 response indicates that authorization has been refused for those credentials.
  // 403 Forbidden: The server understood the request, but is refusing to fulfill
  me.inner = error;
  me.data = data;
  me.noLogging = noLogging;
  if (!noLogging) {
    logError(me);
  }
}
util.inherits(UnauthorizedError, Error);

// AuthenticationError
function AuthenticationError({ code, error, message, debugMessage, status, data, noLogging }) {
  const me = this;
  const { constructor } = me;

  Error.captureStackTrace(me, constructor);

  me.name = constructor.name;
  me.message = message;
  me.code = code;
  me.debugMessage = debugMessage;
  me.status = status || 401; // Unauthorized
  me.inner = error;
  me.data = data;
  me.noLogging = noLogging;
  if (!noLogging) {
    logError(me);
  }
}
util.inherits(AuthenticationError, Error);

// ServerError
function ServerError({ code, error, message, debugMessage, status, data, noLogging }) {
  const me = this;
  const { constructor } = me;
  Error.captureStackTrace(me, constructor);
  me.name = constructor.name;
  me.message = message;
  me.debugMessage = debugMessage + (error && error.message ? ` Message: ${error.message}` : '');
  me.code = code;
  me.status = status || 500; // Internal Server Error
  me.inner = error;
  me.data = data;
  me.noLogging = noLogging;
  if (!noLogging) {
    logError(me);
  }
}
util.inherits(ServerError, Error);

// ClientError
function ClientError({ code, error, message, debugMessage, status, data, noLogging }) {
  const me = this;
  const { constructor } = me;

  Error.captureStackTrace(me, constructor);
  me.name = constructor.name;
  me.message = message;
  me.debugMessage = debugMessage + (error && error.message ? ` Message: ${error.message}` : '');
  me.code = code;
  me.status = status || 400; // Bad Request
  me.inner = error;
  me.data = data;
  me.noLogging = noLogging;
  if (!noLogging) {
    logError(me);
  }
}
util.inherits(ClientError, Error);

// ValidationError
function ValidationError({ code, error, message, debugMessage, status, data, noLogging }) {
  const me = this;
  const { constructor } = me;

  Error.captureStackTrace(me, constructor);
  me.name = constructor.name;
  me.message = message;
  me.debugMessage = debugMessage + (error && error.message ? ` Message: ${error.message}` : '');
  me.code = code;
  me.status = status || 400; // Bad Request
  me.inner = error;
  me.data = data;
  me.noLogging = noLogging;
  if (!noLogging) {
    logError(me);
  }
}
util.inherits(ValidationError, Error);

export { AuthenticationError, UnauthorizedError, ServerError, ClientError, ValidationError };
