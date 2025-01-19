// routes/placeRoutes.js
const express = require('express');
const Place = require('../models/Place');
const Category = require('../models/Category');

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
router.get('/:id', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate('categoryId', 'name');
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new place
router.post('/', async (req, res) => {
  try {
    const { categoryId } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const newPlace = new Place(req.body);
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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
