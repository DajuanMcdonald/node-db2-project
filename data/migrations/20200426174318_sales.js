
exports.up = function(knex) {
    return knex.schema.createTable('sales', function (tbl) {
        tbl.increments();
        tbl.integer('sale_id')
        .references('id').inTable('cars')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
        
        tbl.timestamps(true, true);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales').dropTableIfExists('cars');
};
