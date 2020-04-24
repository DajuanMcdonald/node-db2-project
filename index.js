const express = require('express');
const server = express();
const carsRoute = require('./routes/carsRoutes');

server.use('/cars', carsRoute);
server.use(express.json())



const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}. `);
})