const express = require('express');
const db = require('../data/config')

const router = express();

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

module.exports = router;