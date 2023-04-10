export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('price')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('price').insert([
        {
          type_id: 1,
          size_id: 1,
          price: 27.5,
        },
        {
          type_id: 2,
          size_id: 1,
          price: 127.5,
        },
        {
          type_id: 3,
          size_id: 2,
          price: 7.5,
        },
        {
          type_id: 4,
          size_id: null,
          price: 10.5,
        },
        {
          type_id: 5,
          size_id: 2,
          price: 20,
        },
      ]);
    });
};
