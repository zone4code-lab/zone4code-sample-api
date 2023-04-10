export const seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Makloubs', description: 'Makloubs are the greatest in our restaurant', exclude_extra: false, image: '522' },
        { name: 'Plats', description: '', exclude_extra:false , image: '122' },
        { name: 'Dresses', description: '', exclude_extra:true , image: '127' },
      ]);
    });
};
