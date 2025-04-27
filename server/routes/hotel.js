const express = require('express');
const router = express.Router();
const { createHotel, fetchAllHotels } = require('../controllers/Hotel')

router.post('/addNewHotel', createHotel);
router.get('/fetchAllHotels', fetchAllHotels);


module.exports = router;