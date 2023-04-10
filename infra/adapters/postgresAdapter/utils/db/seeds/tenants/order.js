export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          customer_id: '466625',
          total: '225.00',
        },
        {
          customer_id: '4625',
          total: '55.00',
          shipping: "Overnigt"
        },
      ]);
    });
};
