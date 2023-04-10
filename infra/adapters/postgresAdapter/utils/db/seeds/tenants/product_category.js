export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_category').insert([
        {
          product_id: 3,
          category_id: 1
        }
      ]);
    });
};
