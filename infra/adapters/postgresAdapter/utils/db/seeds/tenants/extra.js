export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('extras')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('extras').insert([
        {
          extra: "french hot fries",
          price: 2.5
        },
        {
          extra: "french  hot fries with extra cheese ",
          price: 7.5
        }
      ]);
    });
};
