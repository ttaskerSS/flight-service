const router = require('express').Router();
const { createFlight, getAllFlights, getFlight, updateFlight, deleteFlight } = require('../controllers/flight.controller');

router.post('/', async (req, res) => {
    await createFlight(req);
    res.send("flight created");
}); 
  
router.get('/', async (req, res) => {
    const flights = await getAllFlights();
    res.json(flights);
});

router.get('/:id', async (req, res) => {
    const flight = await getFlight(req.params.id);
    res.json(flight);
});

router.put('/:id', async (req, res) => {
    await updateFlight(req); 
    res.send("flight updated");
});

router.delete('/:id', async (req, res) => {
    await deleteFlight(req.params.id);
    res.send("flight deleted");
});

module.exports = router;