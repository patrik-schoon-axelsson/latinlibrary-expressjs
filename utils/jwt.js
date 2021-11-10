const jwt = require('jsonwebtoken')

// JWT services for authentication

exports.signToken = (user_obj) => {
    return jwt.sign(user_obj, process.env.JWT_SECRET)
}

exports.validateToken = (token) => {
   return jwt.verify(token, process.env.JWT_SECRET)
};
