const express = require('express');
const router = express.Router();
const detailsController = require('../controller/DetailsController');
const upload = require('../middleware/upload');

// Route to add details
router.post('/add', upload.fields([
  { name: 'firstimage1', maxCount: 1 },
  { name: 'firstimage2', maxCount: 1 },
  { name: 'firstimage3', maxCount: 1 },
  { name: 'firstimage4', maxCount: 1 },
  { name: 'firstimage5', maxCount: 1 },
  { name: 'map_image', maxCount: 1 }
]), detailsController.addDetails);

// Route to get all details
router.get('/', detailsController.getAllDetails);

// Route to get details by ID
router.get('/:id', detailsController.getDetailsById);

// Route to update details by ID
router.put('/:id', upload.fields([
  { name: 'firstimage1', maxCount: 1 },
  { name: 'firstimage2', maxCount: 1 },
  { name: 'firstimage3', maxCount: 1 },
  { name: 'firstimage4', maxCount: 1 },
  { name: 'firstimage5', maxCount: 1 },
  { name: 'map_image', maxCount: 1 }
]), detailsController.updateDetails);

// Route to delete details by ID
router.delete('/:id', detailsController.deleteDetails);

module.exports = router;
