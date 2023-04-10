export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('price')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('price').insert([
        {
          type_id: 8,
          size_id: 4,
          price: 27.5,
        },
        {
          type_id: 9,
          size_id: 4,
          price: 127.5,
        },
        {
          type_id: 10,
          size_id: 5,
          price: 7.5,
        },
        {
          type_id: 11,
          size_id: null,
          price: 10.5,
        },
        {
          type_id: 12,
          size_id: 5,
          price: 20,
        },
      ]);
    });
};
