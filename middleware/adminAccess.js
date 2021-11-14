const User = require('../models/User')

const adminAuth = async (req, res, next ) => {
    const user = await User.findOne({ where: { email: req.user.email}});
    try {
        if ( user.admin ) {
            next();
        } else {
            res.status(403).json({
                message: "Authorization failed, user is not Admin."
            });
        }
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
};

module.exports = adminAuth