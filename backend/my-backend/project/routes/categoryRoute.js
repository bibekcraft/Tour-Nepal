const express = require('express');
const router = express.Router();
const categoryController = require('../controller/CategoryController');
const upload = require('../middlewear/upload'); // Middleware for file upload

// Route to add a new category with an image
router.post('/add', categoryController.addCategory);

// Route to fetch all categories
router.get('/', categoryController.getAllCategories);

// Route to fetch a single category by ID
router.get('/:id', categoryController.getCategoryById);

// Route to update category by ID (allows updating name and image)
router.put('/:id', categoryController.updateCategory);

// Route to delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;