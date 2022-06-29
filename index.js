const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const cors = require('cors');
 
const app = express();
const PORT = process.env.PORT || 8080; 

app.use(express.json()); 
app.use(cors());
app.use('/flights', require('./server/routes/flight.route'));

app.all('*', (req, res) => { 
    res.status(404).send('No resources were found');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});