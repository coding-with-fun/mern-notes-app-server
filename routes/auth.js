const express = require('express');
const { home } = require('../controllers/auth');
const router = express.Router();

router.get('/', home);

module.exports = router;
