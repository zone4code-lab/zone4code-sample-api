export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('type')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('type').insert([
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
