const express = require('express');
const shopController = require('../controllers/Basket');

const router = express.Router();

router.get('/', shopController.getAllProducts);

router.get('/products/:prodId', shopController.getProductDetail);

router.post('/add-to-cart', shopController.addToCart);

router.get('/cart', shopController.getCart);

router.post('/delete-cart', shopController.deleteInCart);

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;