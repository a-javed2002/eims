const express = require('express');
const router = express.Router();
const productController = require('../../controllers/client/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductDetails);

module.exports = router;
