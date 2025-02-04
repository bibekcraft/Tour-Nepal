const express = require('express');
const multer = require('multer');
const path = require('path');
const detailsController = require('../controller/DetailsController');

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

router.post('/add', upload.single('image'), detailsController.addDetails);
router.get('/', detailsController.getAllDetails);
router.get('/:id', detailsController.getDetailsById);
router.put('/:id', upload.single('image'), detailsController.updateDetails);
router.delete('/:id', detailsController.deleteDetails);

module.exports = router;
