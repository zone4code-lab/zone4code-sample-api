export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('order_item')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('order_item').insert([
        {
          order_id: 1,
          type_id: 1,
          color_id: 1,
          size_id: 1,
          price: 30,
          quantity: 3
        },
        {
          order_id: 2,
          type_id: 2,
          color_id: 2,
          size_id: 4,
          price: 30,
          quantity: 3
        }
      ]);
    });
};
