export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('order')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('order').insert([
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
