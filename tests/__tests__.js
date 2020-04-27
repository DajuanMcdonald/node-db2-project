const knex = require('../data/config');

describe('CRUD operations for cars table', () => {
    before((done) => {
        knex.migrate.latest()
        .then(() => {
            return knex.seed.run();
        }).then(() => done())
    })

    test('Testing library able to read and run test', function () {
        console.log('Testing library up and running')
    });
})