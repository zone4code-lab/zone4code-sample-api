export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('person')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
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
