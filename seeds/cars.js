
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Volkswagon', model: 'Jetta', vin: '12456', milage: 9000},
        {make: 'BMW', model: 'Z Series', vin: '2468', milage: 988},
        {make: 'Lexus', model: 'C Class', vin: '24555L68', milage: 1988},
        
        
      ]);
    });
};
