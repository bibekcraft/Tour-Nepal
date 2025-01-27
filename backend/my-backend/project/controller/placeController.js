// controllers/placeController.js

const { Place } = require("../models/Place");
const { Category } = require("../models/Category");

// Get all places by categoryId
exports.getPlacesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Ensure category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const places = await Place.findAll({
      where: { categoryId },
      include: {
        model: Category,
        attributes: ["id", "name"],
      },
    });
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new place
exports.createPlace = async (req, res) => {
  try {
    const { name, dayTravelTime, nightTravelTime, shortDescription, photo, categoryId } = req.body;

    // Ensure the category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Create a new place in the database
    const place = await Place.create({
      name,
      dayTravelTime,
      nightTravelTime,
      shortDescription,
      photo,
      categoryId,
    });

    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing place
exports.updatePlace = async (req, res) => {
  try {
    const { placeId } = req.params;
    const { name, dayTravelTime, nightTravelTime, shortDescription, photo, categoryId } = req.body;

    const place = await Place.findByPk(placeId);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    // Optionally update fields only if new values are provided
    place.name = name || place.name;
    place.dayTravelTime = dayTravelTime || place.dayTravelTime;
    place.nightTravelTime = nightTravelTime || place.nightTravelTime;
    place.shortDescription = shortDescription || place.shortDescription;
    place.photo = photo || place.photo;
    place.categoryId = categoryId || place.categoryId;

    await place.save();
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePlace = async (req, res) => {
  try {
    const { placeId } = req.params;

    const place = await Place.findByPk(placeId);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    await place.destroy();
    res.status(204).send(); // Successful deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createPlaceController = async (req, res) => {
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
}

export const  getPlaceByID=async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate('categoryId', 'name');
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}