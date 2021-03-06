const user = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        let hashpass = await bcrypt.hash(req.body.password, 15)
        let new_user = User.build({
            email: req.body.email,
            userName: req.body.userName,
            password: hashpass,
            admin: false
        })

        new_user.save()
        .then(user => {
            res.status(200).json({
                message: "New user added succesfully."
            })
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};

exports.login = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email}})
    try {
        if (user) {
            const password_valid = bcrypt.compareSync(req.body.password, user.password)
            
            if (password_valid) {
                    const sanitized_user = {
                        email: user.email,
                        userName: user.userName,
                        admin: user.admin
                    }
                    const access_token = await jwt.sign(sanitized_user, process.env.JWT_SECRET, {expiresIn: '1h'})
                    const refresh_token = await jwt.sign(sanitized_user, process.env.JWT_REFRESH_SECRET, {expiresIn: '24h'})
                    res.status(200).json({
                        token: access_token,
                        refreshToken: refresh_token,
                        user: sanitized_user
                    })
                } else {
                    res.status(403).json({
                        message: "Invalid credentials."
                    })
                }
        } else {
            res.status(404).json({
                message: "No matching user found."
            })
        }
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
};