const express = require('express');
const multer = require('multer');
const path = require('path');
const placeController = require('../controller/placeController');

const router = express.Router();

// Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

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
  limits: { fileSize: 2 * 1024 * 1024 }, 
  fileFilter
});

router.post('/add', upload.single('image'), placeController.addPlace);
router.get('/', placeController.getAllPlaces);
router.get('/:id', placeController.getPlaceById);
router.put('/:id', upload.single('image'), placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;
