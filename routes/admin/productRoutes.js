const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/create', productController.createProduct);
router.post('/update/:id', productController.updateProduct);
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;
