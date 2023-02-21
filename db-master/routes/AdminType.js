const express = require('express')
const AdminTypeController = require('../controllers/AdminType')
const router = express.Router();
router.get('/', AdminTypeController.findAll);
router.get('/:id', AdminTypeController.findOne);
router.post('/', AdminTypeController.create);
router.patch('/:id', AdminTypeController.update);
router.delete('/:id', AdminTypeController.delete);
module.exports = router