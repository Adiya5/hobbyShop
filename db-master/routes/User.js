const express = require('express')
const UserController = require('../controllers/User')
const path = require("path");
const router = express.Router();
router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);
router.get("/", (req, res) => res.send("help"))
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router