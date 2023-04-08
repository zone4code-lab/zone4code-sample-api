---
to: infra/adapters/postgresAdapter/utils/db/seeds/tenants/<%= name%>.js
---
export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('<%= name%>')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('<%= name%>').insert([
        {
          id: 1,
          name: 'data',
          description: 'data'
        },
        {
          id: 2,
          name: 'data',
          description: 'data'
        },
        {
          id: 3,
          name: 'data',
          description: 'data'
        },
      ]);
    });
};
