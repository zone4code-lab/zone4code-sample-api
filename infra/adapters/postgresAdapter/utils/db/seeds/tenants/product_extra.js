export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_extra')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_extra').insert([
        {
          product_id: 4,
          extra_id: 4
        },
        {
          product_id: 4,
          extra_id: 5
        },
        {
          product_id: 5,
          extra_id: 4
        },
        {
          product_id: 5,
          extra_id: 5
        },
      ]);
    });
};
