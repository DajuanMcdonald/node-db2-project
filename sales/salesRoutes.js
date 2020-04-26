const express = require('express');
const db = require('../data/config')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Sales Table connected</h1>')
})

module.exports = router;