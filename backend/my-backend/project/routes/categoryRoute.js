const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { addCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controller/CategoryController');

const router = express.Router();

// Ensure the uploads folder exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  }
});

// File validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({ 
  storage, 
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter
});

// Routes for category management
router.post('/add', upload.single('image'), addCategory);
router.get('/all', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', upload.single('image'), updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
