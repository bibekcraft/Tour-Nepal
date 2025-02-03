const Category = require('../models/CategoryModel');
const fs = require('fs');
const path = require('path');

// Add a new category
exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    // Handle Image Upload
    let imageUrl = null;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    // Save category in DB
    const category = new Category({ name, image: imageUrl });
    await category.save();

    res.status(201).json({ message: "Category added successfully", category });

  } catch (error) {
    console.error("Error creating category:", error.message);
    
    // Delete uploaded file if error occurs
    if (req.file) {
      fs.unlinkSync(path.join(__dirname, `../uploads/${req.file.filename}`));
    }

    res.status(500).json({ message: 'Error creating category', error: error.message });
  }
};
// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
};

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error: error.message });
  }
};

// Update category details by ID
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, image: imageUrl },
      { new: true }
    );

    if (!updatedCategory) {
      if (req.file) {
        fs.unlinkSync(path.join(__dirname, `../uploads/${req.file.filename}`));
      }
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error: error.message });
  }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (deletedCategory.image) {
      fs.unlinkSync(path.join(__dirname, `../${deletedCategory.image}`));
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error: error.message });
  }
};
