const express = require('express');
const server = express();
const carsRoute = require('./cars/carsRoutes');
const salesRoute = require('./sales/salesRoutes');

server.use(express.json());
server.use('/cars', carsRoute);
server.use('/sales', salesRoute);



const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}. `);
})