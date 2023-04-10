export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('materials')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {
          type_id: 8,
          composition: " 20 % coton"
        }
      ]);
    });
};
