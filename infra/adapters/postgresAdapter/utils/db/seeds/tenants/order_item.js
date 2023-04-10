export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('order_item')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('order_item').insert([
        {
          order_id: 3,
          type_id: 8,
          color_id: 6,
          size_id: 4,
          price: 30,
          quantity: 3
        },
        {
          order_id: 4,
          type_id: 9,
          color_id: 7,
          size_id: 4,
          price: 30,
          quantity: 3
        }
      ]);
    });
};
