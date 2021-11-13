const jwt = require('jsonwebtoken')

// JWT services for authentication

exports.signToken = (user_obj) => {
    return jwt.sign(user_obj, process.env.JWT_SECRET, { expiresIn: '1h'})
}

exports.validateToken = (token) => {
   return jwt.decode(token, process.env.JWT_SECRET);
};

// Refresh token implementation, separate salt for hashing

exports.refreshToken = (user_obj) => {
    return jwt.sign(user_obj, process.env.JWT_REFRESH_SECRET, { expiresIn: '24h'})
};

exports.verifyRefreshToken = (refresh_token) => {
    return jwt.verify(refresh_token, process.env.JWT_REFRESH_SECRET);
};