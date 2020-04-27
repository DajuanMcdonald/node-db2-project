const express = require('express');
const db = require('../data/config')

const router = express.Router();


//get array of all cars: GET
router.get('/', (req, res) => {
    db('cars')
    .then( allCars => {
        res.status(200).json(allCars)
    })
    .catch(err => res.status.json({mesage: 'Unable to handle request'}))
   
    
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

//update existing car data: PUT/UPDATE
router.put('/:id', (req, res) => {
    const updates = req.body;
    
    db('cars').where({ id: req.params.id}).update(updates)
    .then( car => {
        if (car) {
            db('cars').where('id', '=', req.params.id).first()
            .then(carChange => res.status(200).json(carChange))
            .catch( err => res.json({message: 'Unable to update that record'}))
        }
    })
    .catch(err => res.status(500).json({message: 'Internal Server Error: 500'}))
})

//remove car from database : DELETE/REMOVE
router.delete('/:id', (req, res) => {
    db('cars').where({id : req.params.id}).del()
    .then( car => {
        if (car > 0) {
            res.status(200).json({message: 'Record deleted Successfully'})

        } else {
            res.status(404).json({message: 'Car not found'})
        }
    }).catch(err => {
        res.status(500).json({message: 'Internal Server Error: 500'})
    })
})

module.exports = router;