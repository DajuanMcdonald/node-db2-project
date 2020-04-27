const knex = require('../data/config');
const request = require('supertest');

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

    test('should return OK status code from index route', () => {
        const expectedStatusCode = 200;
    
        let response = request(knex).get('/')
        .then( res => {
            response = res;
            expect(response.status).toEqual(expectedStatusCode);
        }).catch(err => {
            console.log(err)
        })
    
    })



    // test('Created a post request', (done) => {
    //     request(knex)
    //     .post('/cars')
    //     .send({make: 'Chevy', model: 'Impala', vin: '6543210', milage: '4300'})
    //     .set('Accept', 'application/json')
    //     .expect(201)
    //     .then((response) => {
    //         expect(response.body).toBe('object')
    //         done();
            
    //     })
    // })


})