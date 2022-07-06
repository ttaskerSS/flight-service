const router = require('express').Router();
const { createFlight, getAllFlights, getFlight, updateFlight, deleteFlight } = require('../controllers/flight.controller');

router.post('/', async (req, res) => {
    await createFlight(req);
    res.send('flight created');
});

router.get('/', async (req, res) => {
    const flights = await getAllFlights();
    res.json(flights);
});

router.get('/:flightNumber', async (req, res) => {
    const flight = await getFlight(req.params.flightNumber); 
    res.json(flight);
});

router.put('/:id', async (req, res) => {
    await updateFlight(req);  
    res.send("flight updated");
}); 

router.delete('/:flightNumber', async (req, res) => {
    await deleteFlight(req.params.flightNumber); 
    res.send('flight deleted');
});

module.exports = router;