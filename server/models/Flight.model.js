const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: { type: String }, 
    departureDate: { type: String, required: true },
    arrivalDate: { type: String, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    departureAirport: { type: String, required: true },
    arrivalAirport: { type: String, required: true },
    numPassengers: { type: Number, required: true },
    passengerLimit: { type: Number, required: true }
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;