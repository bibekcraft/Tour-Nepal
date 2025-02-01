const express = require('express');
const router = express.Router();
const categoryController = require('../controller/CategoryController');
const upload = require("../middlewear/upload");  // Ensure correct path

router.post('/add', upload.fields([
  { name: 'image', maxCount: 1 }, // for a single image upload field
]), categoryController.addCategory);

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', upload.single('image'), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
