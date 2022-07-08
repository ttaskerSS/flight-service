const Flight = require('../models/Flight.model');

// Create flights
const createFlight = async req => {
    try {
        const flight = new Flight({
            flightNumber: req.body.flightNumber,
            departureDate: req.body.departureDate,
            arrivalDate: req.body.arrivalDate,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            departureAirport: req.body.departureAirport,
            arrivalAirport: req.body.arrivalAirport,
            numPassengers: req.body.numPassengers,
            passengerLimit: req.body.passengerLimit,
        });
        await flight.save();
        return flight._id;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

// Get flights
const getAllFlights = async () => {
    const flights = await Flight.find(); 
    return flights;
}

const getFlight = async id => {
    try {
        const flight = await Flight.find({ flightNumber: id });
        if (flight == null) {
            throw `No flight with the id of ${id} was found.`;
        }
        return flight;
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; 
    }
}

// Update flights
const updateFlight = async req => {
    try {
        const updatedData = {
            flightNumber: req.body.flightNumber,
            departureDate: req.body.departureDate,
            arrivalDate: req.body.arrivalDate,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            departureAirport: req.body.departureAirport,
            arrivalAirport: req.body.arrivalAirport,
            numPassengers: req.body.numPassengers,
            passengerLimit: req.body.passengerLimit,
        }
        await Flight.findByIdAndUpdate(req.params.id, updatedData);
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

// Delete flights
const deleteFlight = async id => {
    try {
       await Flight.deleteOne({ flightNumber: id });
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateFlight,
    deleteFlight
}