const express = require('express');
const router = express.Router();
const detailsController = require('../controller/DetailsController');

router.post('/add', detailsController.addDetail);
router.get('/', detailsController.getAllDetails);
router.get('/:id', detailsController.getDetailById);
router.put('/:id', detailsController.updateDetail);
router.delete('/:id', detailsController.deleteDetail);

module.exports = router;
