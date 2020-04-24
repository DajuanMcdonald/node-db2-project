const express = require('express');
const server = express();
const carsRoute = require('./routes/carsRoutes');

server.use('/cars', carsRoute);




const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}. `);
})