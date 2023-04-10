export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_extra')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_extra').insert([
        {
          product_id: 1,
          extra_id: 1
        },
        {
          product_id: 1,
          extra_id: 2
        },
        {
          product_id: 2,
          extra_id: 1
        },
        {
          product_id: 2,
          extra_id: 2
        },
      ]);
    });
};
