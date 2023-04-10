export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          name: "Women",
          parent_id: null
        },
        { 
          name: "man",
          parent_id: null
        },
        {
          name: "clothing",
          parent_id: 1
        },
        {
          name: "shoes",
          parent_id: 1
        },
      ]);
    });
};
