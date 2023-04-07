export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('color')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('color').insert([
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
