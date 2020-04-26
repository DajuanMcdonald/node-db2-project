const express = require('express');
const db = require('../data/config')

const router = express.Router();
// router.post('/', async (req, res, next) => {
//     try {
//         const data = req.body;
//         db('cars').insert(data)
//         const newData = await db('cars').where(req.params.id)
//         res.json(newData)
//     }
//     catch(err) {
//         next(err)
//     }
// })

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


router.get('/:id', async (req, res, next) => {
    try {
        const cars = await db('cars').where({id: req.params.id}).first()
    }
    catch(err) {
        next(err);
    }
})


router.post('/', async (req, res, next) => {
    try {
        const carsData = req.body;
        console.log(carsData)
        const [id] = await db("cars").insert(carsData)
        const newCars = await db("cars").where({ id })

        res.status(201).json(newCars)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router;