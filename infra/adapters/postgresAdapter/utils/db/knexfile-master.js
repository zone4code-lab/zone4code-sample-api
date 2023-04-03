import { postgresDB } from '../../../../../config/appSetting.js';

export default {
  client: 'pg',
  connection: `postgres://${postgresDB.POSTGRES_USERNAME}:${postgresDB.POSTGRES_PASSWORD}@${postgresDB.POSTGRES_HOST}:${postgresDB.POSTGRES_PORT}/knexmaster?timezone=utc`,
  migrations: {
    disableMigrationsListValidation: true,
    directory: 'migrations/master/',
  },
  seeds: {
    directory: 'seeds/master/',
  },
};
