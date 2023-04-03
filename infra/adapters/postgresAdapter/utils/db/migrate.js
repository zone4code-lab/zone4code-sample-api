import { postgresDB } from '../../../../../config/appSetting.js';

//const Promise = require('bluebird');

import Promise from 'bluebird';

import knex from 'knex';
import { existsSync, mkdirSync } from 'fs';

const myArgs = process.argv.slice(2);

//update tenant set isUpdating = 1 where id > 0;

const knownMigrationTypes = ['latest', 'rollback', 'up', 'down', 'list'];
const migrationType = myArgs[0];

if (!knownMigrationTypes.includes(migrationType)) {
  console.error('Please add migrations command (latest, rollback, up, down, list)');
  process.exit(1);
}

const masterMigrationsPath = 'migrations/master';
const masterSeedsPath = 'seeds/master';

const tenantsMigrationsPath = 'migrations/tenants/';
const tenantsSeedsPath = 'seeds/tenants';

if (!existsSync(masterMigrationsPath)) {
  mkdirSync(masterMigrationsPath, { recursive: true });
}

if (!existsSync(masterSeedsPath)) {
  mkdirSync(masterSeedsPath, { recursive: true });
}

if (!existsSync(tenantsMigrationsPath)) {
  mkdirSync(tenantsMigrationsPath, { recursive: true });
}

if (!existsSync(tenantsSeedsPath)) {
  mkdirSync(tenantsSeedsPath, { recursive: true });
}

const knexConnectionMaster = knex({
  client: 'pg',
  multipleStatements: true,
  connection: {
    user: postgresDB.POSTGRES_USERNAME,
    host: postgresDB.POSTGRES_HOST,
    port: postgresDB.POSTGRES_PORT,
    password: postgresDB.POSTGRES_PASSWORD,
    database: 'knexmaster',
    multipleStatements: true,
    // timezone: '+00:00',
    dateStrings: ['DATE', 'DATETIME', 'TIMESTAMP'],
    /*
    typeCast: (field, next) => {
      if (["DATE", "DATETIME", "TIMESTAMP"].includes(field.type)) {
        return new Date(field.string());
      }
      return next();
    },
    */
  },
  migrations: {
    directory: masterMigrationsPath,
    // schemaName: "imen",
  },
  seeds: {
    directory: masterSeedsPath,
  },
  pool: {
    min: 2,
    max: 20,
    propagateCreateError: false,
  },
});
console.log('Migrations started...');

const connections = [];

Promise.resolve(knexConnectionMaster.raw('update tenant set isUpdating = 1 where id > 0;'))
  .then(() => console.log('Set all tenants to updating mode.'))
  .then(() => {
    console.log(`master migrations (${migrationType}) started...`);
    let promise;
    switch (migrationType) {
      case 'latest':
        promise = knexConnectionMaster.migrate.latest();
        break;
      case 'rollback':
        promise = knexConnectionMaster.migrate.rollback();
        break;
      case 'up':
        promise = knexConnectionMaster.migrate.up();
        break;
      case 'down':
        promise = knexConnectionMaster.migrate.down();
        break;
      case 'list':
        promise = knexConnectionMaster.migrate.list();
        break;
    }
    return promise.then(() => {
      console.log(`master migrations (${migrationType}) completed!`);
    });
  })
  .then(() => {
    console.log(`tenant_* migrations (${migrationType}) started...`);
    return knexConnectionMaster.select().from('tenant_database_connection');
  })
  .map((tenantDatabaseConnection) => {
    const connection = knex(getConnectionConfig(tenantDatabaseConnection, 'migration'));
    connections.push(connection);
    return {
      name: tenantDatabaseConnection.dbname,
      knex: connection,
    };
  })
  .map((database) => {
    const config = {
      directory: tenantsMigrationsPath,
    };
    let promise;
    switch (migrationType) {
      case 'latest':
        promise = database.knex.migrate.latest(config);
        break;
      case 'rollback':
        promise = database.knex.migrate.rollback(config);
        break;
      case 'up':
        promise = database.knex.migrate.up(config);
        break;
      case 'down':
        promise = database.knex.migrate.down(config);
        break;
      case 'list':
        promise = database.knex.migrate.list(config);
        break;
    }
    return promise.then(() => {
      console.log(`%s database migrations (${migrationType}) completed!`, database.name);
    });
  })
  .then(() => {
    return knexConnectionMaster.raw('update tenant set isUpdating = null where id > 0;');
  })
  .then(() => {
    console.log('Set all tenants to default mode.');
    return knexConnectionMaster.destroy();
  })
  .then(() => Promise.map(connections, (knex) => knex.destroy()))
  .catch((err) => {
    // todo: rollback needed?!
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    console.log('Closed migration database connections.');
    console.log(`Migrations (${migrationType}) completed!`);
    process.exit(0);
  });

function getConnectionConfig(tenantDbData, userId) {
  let value;
  return {
    client: 'pg',
    connection: {
      host: tenantDbData.dbhost,
      port: tenantDbData.dbport,
      user: tenantDbData.dbusername,
      database: tenantDbData.dbname,
      password: tenantDbData.dbpassword,
      /**
           password: decrypt({ // if u hav plain text PW in database, use tenantDbData.dbPassword without decrypting
                salt: tenantDbData.dbPasswordSalt,
                encryptedValue: tenantDbData.dbPassword
            }),
           
            */
      multipleStatements: true,
      dateStrings: ['DATE', 'DATETIME', 'TIMESTAMP'],
    },
    migrations: {
      //directory: tenantsMigrationsPath,
      disableMigrationsListValidation: true,
      directory: 'migrations/tenants/',
    },
    seeds: {
      directory: tenantsSeedsPath,
    },
    pool: {
      min: 1,
      max: 20,
      propagateCreateError: false,
    },
  };
}
