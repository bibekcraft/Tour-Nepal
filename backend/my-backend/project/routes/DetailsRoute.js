// routes/detailsRoutes.js
const express = require('express');
const Details = require('../models/Details');
const Place = require('../models/Place');

const router = express.Router();

// Get all details
router.get('/', async (req, res) => {
  try {
    const details = await Details.find().populate('placeId', 'name');
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get details by place ID
router.get('/:id', async (req, res) => {
  try {
    const details = await Details``.findOne({ placeId: req.params.id }).populate('placeId', 'name');
    if (!details) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new details
router.post('/', async (req, res) => {
  try {
    const { placeId } = req.body;
    const place = await Place.findById(placeId);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    const newDetails = new Details(req.body);
    await newDetails.save();
    res.status(201).json(newDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update details by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDetails = await Details.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDetails) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json(updatedDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete details by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDetails = await Details.findByIdAndDelete(req.params.id);
    if (!deletedDetails) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json({ message: 'Details deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
