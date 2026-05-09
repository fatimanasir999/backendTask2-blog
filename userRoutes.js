const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');

router.post('/register', ctrl.registerUser);
router.get('/', ctrl.getAllUsers);
router.get('/:id', ctrl.getUserById);

module.exports = router; 