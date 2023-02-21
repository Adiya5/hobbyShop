const express = require('express')
const ProductController = require('../controllers/Product')
const router = express.Router();
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductDetail);
router.get('/cart', ProductController.getCart);
router.post('/add-to-cart', ProductController.addToCart);
//router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.deleteInCart);
module.exports = router