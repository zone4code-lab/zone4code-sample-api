export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_size')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_size').insert([
        {
          product_id: 4,
          size_id: 5,
        },
        {
          product_id: 5,
          size_id: 5,
        },
        {
          product_id: 6,
          size_id: 4,
        },
      ]);
    });
};
