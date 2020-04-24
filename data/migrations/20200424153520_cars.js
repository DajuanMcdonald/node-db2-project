
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
        table.string('make', 255).notNullable();
        table.string('model', 255).notNullable();
        table.string('vin', 255).notNullable();
        table.integer('milage').notNullable();
        table.string('transmission');
        table.string('title');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
