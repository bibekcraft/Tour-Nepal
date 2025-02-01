const express = require('express');
const router = express.Router();
const detailsController = require('../controller/DetailsController');
const upload = require('../middlewear/upload'); // Middleware for file uploads

// Add a new details entry
router.post('/add', detailsController.addDetails);

// Get all details entries
router.get('/', detailsController.getAllDetails);

// Get a specific details entry by ID
router.get('/:id', detailsController.getDetailsById);

// Update a details entry by ID
router.put('/:id',detailsController.updateDetails);

// Delete a details entry by ID
router.delete('/:id', detailsController.deleteDetails);

module.exports = router;