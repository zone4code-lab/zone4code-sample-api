export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('types')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {
          name: 'Mini dress',
          description: 'ASOS DESIGN fluffy cross neck mini dress with ruched detail in pinkJohn Doe is smart',
          image: '22',
          product_id: 3,
        },
        {
          name: 'Day dress',
          description: 'ASOS DESIGN embroidered short sleeve midi dress with dobby mesh in ivory',
          image: '27',
          product_id: 3,
        },
        {
          name: 'Escalope Grillé Aux Champignons À La Crème',
          description: '',
          image: '127',
          product_id: 2,
        },
        {
          name: 'Plat Mixte',
          description: '',
          image: '127',
          product_id: 2,
        },
        {
          name: 'Makloub Cordon Bleu',
          description: '',
          image: '127',
          product_id: 1,
        },
      ]);
    });
};
