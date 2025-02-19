const Category = require('../models/CategoryModel');

// Add a new category
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file ? req.file.path : null; // Get the file path from Multer

    if (!name || !image) {
      return res.status(400).json({ message: 'Name and image are required!' });
    }

    const newCategory = new Category({ name, image });
    await newCategory.save();

    res.status(201).json({ message: 'Category added successfully!', category: newCategory });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Failed to add category.' });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories.' });
  }
};

// Get a category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found.' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ message: 'Failed to fetch category.' });
  }
};

// Update a category
const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file ? req.file.path : null; // Get the file path from Multer

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, image },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    res.status(200).json({ message: 'Category updated successfully!', category: updatedCategory });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ message: 'Failed to update category.' });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found.' });
    }
    res.status(200).json({ message: 'Category deleted successfully!' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Failed to delete category.' });
  }
};

module.exports = { addCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };
