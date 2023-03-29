export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'nigel@email.com',
        },
        {
          id: 2,
          name: 'nakaz@email.com',
        },
        {
          id: 3,
          name: 'jaywon@email.com',
        },
      ]);
    });
};
