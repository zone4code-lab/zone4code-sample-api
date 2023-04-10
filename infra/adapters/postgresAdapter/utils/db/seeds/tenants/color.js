export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('colors')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('colors').insert([
        {
          color: "yellow",
          type_id: 1
        },
        {
          color: "pink",
          type_id: 1
        },
      ]);
    });
};
