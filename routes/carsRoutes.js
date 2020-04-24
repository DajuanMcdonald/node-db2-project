const express = require('express');
const db = require('../data/car-dealer.db3')

const server = express();

server.get('/', (req, res) => {
    
    res.status(200).send('<h1>Database Schema Design</h1>')
})

module.exports = server;