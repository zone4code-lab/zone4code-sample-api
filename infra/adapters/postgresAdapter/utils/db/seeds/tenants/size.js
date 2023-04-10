export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('sizes').insert([{ size: 'XL' }, { size: 'moyenne' }]);
    });
};
