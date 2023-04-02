import Knex from 'knex';

import { postgresDB } from '../../../../../config/appSetting.js';

import KnexConfig from './knexfile';

/**
 * @type {import("express").RequestHandler}
 *
 */
const initializeDB = async function (tenantId) {
  /***
   * @type {import ("knex").Knex}
   */
  let _knex = null;
  if (tenantId) {
    /* if (!req.user || !req.user.role_scopes || !Array.isArray(req.role_scopes)) {
      res.status(404).json({ message: "Invalid user header" });
      return;
    }
*/

    _knex = Knex({
      ...KnexConfig,
      connection: `postgres://${postgresDB.POSTGRES_SECONDARY_USERNAME}:${postgresDB.POSTGRES_PASSWORD}@${postgresDB.POSTGRES_HOST}/${tenantId}?timezone=utc`,
      migrations: {
        disableMigrationsListValidation: true,
        directory: 'migrations',
      },

      seeds: {
        directory: __dirname + 'seeds',
      },
      // ...(req.method.toUpperCase() === 'POST' && { connection: `postgres://${postgresDB.POSTGRES_SECONDARY_USERNAME}:${postgresDB.POSTGRES_PASSWORD}@${postgresDB.POSTGRES_HOST}/${postgresDB.POSTGRES_DATABASE}?timezone=utc` }),
      pool: {
        min: 2,
        max: 4,
        afterCreate: (conn, done) => {
          conn.query(
            `
						set app.tenant_id = ${tenantId};
						set app.user_id = ${tenantId};
						set app.tenant_team_ids = ${tenantId};
						`,
            done
          );
        },
      },
    });

    /* if (Object.keys(knexCache).length > MAX_CONNECTION_CACHE) {
      const firstCacheKey = Object.keys(knexCache)[0];
      const knexCached = knexCache[firstCacheKey];
      await knexCached.destroy();
      delete knexCache[firstCacheKey];
    }*/
  }

  return _knex;
};

export default { initializeDB };
