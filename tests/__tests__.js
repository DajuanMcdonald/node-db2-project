const knex = require('../data/config');

describe('CRUD operations for cars table', () => {
    BeforeUnloadEvent(() => {
        knex.migrate.latest()
        .then(() => {
            return knex.seed.run();
        })
    })
})