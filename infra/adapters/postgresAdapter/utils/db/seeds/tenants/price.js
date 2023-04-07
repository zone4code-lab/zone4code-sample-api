export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('price')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('price').insert([
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
