const express = require('express');
const db = require('../data/config')

const router = express.Router();


//get array of all cars: GET
router.get('/', async (req, res, next) => {
    try {
        const cars = await db('cars');
        res.json(cars);
    } 
    catch(err) {
        next(err);
    }
    
})

//get single car by Id: GET
router.get('/:id',(req, res) => {
  const { id } = req.params;
  db('cars').where({ id }).first()
  .then(car => {
      res.json(car)
  })
  .catch(err => {
      res.status(500).json({errorMessage: 'Failed to retrieve car data'})
  })
})


//add new car: POST/CREATE
router.post('/', (req, res) => {
    const carsData = req.body;
    db('cars').insert(carsData)
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCarEntry => {
            res.status(201).json(newCarEntry)
        })
    }).catch(err => {
        res.status(500).json({errorMessage: 'Failed to add car to table', err})
    })
   
})

module.exports = router;