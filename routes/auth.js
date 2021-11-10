const express = require('express');
const router = express.Router();
const auth_controllers = require('../controllers/User');


router.post('/login', auth_controllers.login);

router.post('/register', auth_controllers.register);

router.post('/verify-token', (req, res) => {
    res.status(200).json({
        message: "Token valid.",
        user: {
            id: 22,
            email: "email@mail.com",
            admin: false
        }
    })
})

module.exports = router