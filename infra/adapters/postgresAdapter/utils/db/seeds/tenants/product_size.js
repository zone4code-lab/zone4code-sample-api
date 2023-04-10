export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_size')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_size').insert([
        {
          product_id: 1,
          size_id: 2,
        },
        {
          product_id: 2,
          size_id: 2,
        },
        {
          product_id: 3,
          size_id: 1,
        },
      ]);
    });
};
