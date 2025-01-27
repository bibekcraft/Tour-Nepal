// routes/placeRoutes.js
const express = require('express');
const Place = require('../models/Place');
const Category = require('../models/Category');
const { createPlaceController, getPlaceByID } = require('../controller/placeController');

const router = express.Router();

// Get all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find().populate('categoryId', 'name');
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get place by ID
router.get('/:id',getPlaceByID );

// Create a new place
router.post('/', createPlaceController);



// Update place by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json(updatedPlace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete place by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json({ message: 'Place deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get places by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const places = await Place.find({ categoryId }).populate('categoryId', 'name');
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
