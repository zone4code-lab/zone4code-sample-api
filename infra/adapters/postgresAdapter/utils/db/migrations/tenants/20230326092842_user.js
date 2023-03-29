/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const up = async (knex) => {
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  try {
    await knex.schema.createTable('user', (table) => {
      table.increments();
      table.string('name');
      table.timestamps(true, true, false);
    });
  } catch (err) {
    console.log('err :>> ', err);
  }
};

/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const down = (knex) => {
  return knex.schema.dropTable('user');
};

// `
// SELECT * FROM "User" INNER JOIN (
// 	SELECT * FROM "UserRole" INNER JOIN (
// 		SELECT * FROM "Tenant" INNER JOIN "Team" ON "Tenant".id = "Team".tenant_id WHERE "Team".tenant_id = 1
// 	) as tenant_team ON "UserRole".tenant_id = tenant_team.tenant_id;
// ) as user_tenant_role
// `;

// --CREATE POLICY team_rls_policy ON "Team" FOR all TO public USING (EXISTS (SELECT * FROM "TenantTeam" INNER JOIN "Tenant" ON ("TenantTeam".tenant_id = "Tenant".id) WHERE "Tenant".id=current_setting('app.current_tenant')::INTEGER))
// --CREATE POLICY rls_user_policy ON "User" FOR all TO public USING (EXISTS (SELECT * FROM "UserRole" INNER JOIN "Tenant" ON ("UserRole".tenant_id = "Tenant".id) WHERE "Tenant".id=current_setting('app.tenant_id')::INTEGER))
