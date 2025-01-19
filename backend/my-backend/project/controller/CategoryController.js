const PlaceCategory = require('../models/CategoryModel');

// Add a new place category
exports.addPlaceCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const existingCategory = await PlaceCategory.findByName(name);

    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = await PlaceCategory.create({ name });
    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all place categories
exports.getAllPlaceCategories = async (req, res) => {
  try {
    const categories = await PlaceCategory.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
