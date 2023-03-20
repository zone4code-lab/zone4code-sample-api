// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import i18n from 'i18n';

import { ServerError, AuthenticationError, UnauthorizedError } from './Errors';
import { keycloak } from '../../config/appSetting';

function requireLogin(req, res, next, newPermission) {
  const { authorization } = req.headers;

  if (newPermission.isNotProtectedUrl(req)) {
    return next();
  }

  if (!authorization) {
    throw new AuthenticationError({
      name: 'middleware',
      code: 'cannot_request_api',
      message: 'authorization not found',
      debugMessage: '[middleware] Error in requireLogin.',
      noLogging: false,
    });
  }

  const permission = newPermission.findPermission(req);

  if (!permission) {
    throw new UnauthorizedError({
      name: 'middleware',
      code: 'cannot_request_api',
      message: `permission not found for ${JSON.stringify(req.method, req.url)}`,
      debugMessage: '[middleware] Error in requireLogin.',
      noLogging: false,
      data: {
        // eslint-disable-next-line no-underscore-dangle
        message: i18n.__('unauthorized'),
      },
    });
  }

  // eslint-disable-next-line no-use-before-define
  return protectAndCheckPermission(req, res, next, permission.resource, permission.scope);
}

function protectAndCheckPermission(req, res, next, resource, scope) {
  const accessToken = req.headers.authorization;

  const data = new URLSearchParams();

  data.append('grant_type', 'urn:ietf:params:oauth:grant-type:uma-ticket');
  data.append('audience', keycloak.KEYCLOAK_CLIENT_ID);
  data.append('permission', `${resource}#${scope}`);
  data.append('response_mode', 'decision');

  return (
    fetch(keycloak.KEYCLOAK_URL, {
      method: 'POST',
      body: data.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `${accessToken}`,
      },
    })
      .then((result) => result.json())
      // eslint-disable-next-line consistent-return
      .then((data) => {
        if (data.error) {
          throw new UnauthorizedError({
            name: 'middleware',
            code: 'cannot_request_api',
            message: `error check permission ${data.error_description}`,
            debugMessage: '[middleware] Error in requireLogin.',
            noLogging: false,
            error: data.error,
            data: {
              // eslint-disable-next-line no-underscore-dangle
              message: i18n.__('unauthorized'),
            },
          });
        }

        const decodedToken = jwt.decode(`${accessToken}`.replace('Bearer ', ''));

        res.locals = {
          userId: decodedToken.sub,
          roles: decodedToken.realm_access.roles,
          email_verified: decodedToken.email_verified,
        };

        next();
      })
      .catch((error) => {
        throw new ServerError({
          name: 'middleware',
          code: 'cannot_request_api',
          message: `cant request server ${error}`,
          debugMessage: '[middleware] Error in requireLogin.',
          noLogging: false,
          error,
          data: {
            // eslint-disable-next-line no-underscore-dangle
            message: i18n.__('unauthorized'),
          },
        });
      })
  );
}

export default requireLogin;
