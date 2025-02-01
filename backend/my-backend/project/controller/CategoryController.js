const Category = require('../models/CategoryModel');

// Add a new category with an image
exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Store image path

    // Create a new category with the name and image URL
    const category = new Category({ name, image: imageUrl });
    await category.save();

    res.status(201).json(category); // Send back the created category
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch all categories from the database
    res.status(200).json(categories); // Send back the list of categories
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id); // Fetch category by ID
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category); // Send the found category
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error });
  }
};

// Update category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    // If an image is uploaded, use the new image URL; otherwise, keep the old one
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, image: imageUrl },
      { new: true } // Return the updated category
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(updatedCategory); // Send the updated category
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// Delete category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id); // Delete category by ID
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' }); // Send success message
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
};
