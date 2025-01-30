const Place = require('../models/PlaceModel');

// Add a new place
exports.addPlace = async (req, res) => {
  try {
    const place = new Place(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ message: 'Error creating place', error });
  }
};

// Get all places
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find().populate('category');
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching places', error });
  }
};

// Get place by ID
exports.getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate('category');
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching place', error });
  }
};

// Update place by ID
exports.updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(500).json({ message: 'Error updating place', error });
  }
};

// Delete place by ID
exports.deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json({ message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting place', error });
  }
};
