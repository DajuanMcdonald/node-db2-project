const knex = require('../data/config');
const request = require('supertest');
const server = require('../cars/carsRoutes');

describe('CRUD operations for cars table ', () => {
    beforeAll((done) => {
        knex.migrate.latest()
        .then(() => {
            return knex.seed.run();
        }).then(() => done())
    })

    test('Testing library able to read and run test', () => {
        console.log('Testing library up and running')
    });

})

describe('Getting back status codes', () => {
        test('should return OK status code from index route', () => {
            const expectedStatusCode = 200;
        
            let response = request(knex).get('/')
            .then( res => {
                response = res;
                expect(response.status).toEqual(expectedStatusCode);
            })
        
        })
})