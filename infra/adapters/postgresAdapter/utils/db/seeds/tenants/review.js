export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          type_id: 8,
          customer_id: "525",
          rating: "5",
          comment: "it's cool",
          images: [
            {
              "id": 123
            },
            {
              "id": 456
            }
          ]
        }
      ]);
    });
};
