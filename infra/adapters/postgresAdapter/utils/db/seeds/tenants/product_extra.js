export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_extra')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_extra').insert([
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
