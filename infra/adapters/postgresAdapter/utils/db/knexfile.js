import { postgresDB } from '../../../../../config/appSetting.js';
export default {
  client: 'pg',
  connection: `postgres://${postgresDB.POSTGRES_USERNAME}:${postgresDB.POSTGRES_PASSWORD}@${postgresDB.POSTGRES_HOST}/${postgresDB.POSTGRES_DATABASE}?timezone=utc`,
  migrations: {
    disableMigrationsListValidation: true,
    directory: 'migrations/tenants/',
  },
  seeds: {
    directory: 'seeds/tenants/',
  },
};
