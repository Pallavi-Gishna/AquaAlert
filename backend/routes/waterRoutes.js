const express = require('express');
const router = express.Router();
const waterController = require('../controllers/waterController');

// Define API endpoints
router.get('/', waterController.getAllRecords); // Fetch all records
router.post('/add', waterController.addRecord); // Add a new record
router.get('/trends', waterController.getTrends); // Fetch water usage trends

module.exports = router;
