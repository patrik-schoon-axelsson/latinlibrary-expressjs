const express = require('express');
const router = express.Router();
const auth_controllers = require('../controllers/User');

router.post('/login', auth_controllers.login);

router.post('/register', auth_controllers.register);

module.exports = router