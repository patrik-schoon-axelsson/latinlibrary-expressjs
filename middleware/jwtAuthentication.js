const jwt = require('jsonwebtoken');

const jwtAuth = (req, res, next ) => {
    const authHeader = req.headers.authorization;

    if ( authHeader ) {
        const token = authHeader.split(' ')[1];
        
            jwt.verify(token, process.env.JWT_SECRET, (err, user ) => {
                if (err) {
                    return res.status(403).json({
                        message: err.message
                    })
                }
                req.user = user;
                console.log(user);
                next();
            })
    } else {
        res.status(401).json({
            message: "Authorization failed, no bearer-token present in request."
        })
    }
};

module.exports = jwtAuth