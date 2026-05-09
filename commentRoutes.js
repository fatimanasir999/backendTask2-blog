const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/commentController');

router.delete('/:id', ctrl.deleteComment);

module.exports = router; 