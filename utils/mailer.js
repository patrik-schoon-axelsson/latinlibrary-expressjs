const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PW
        },
    secure: true
})

module.exports = transporter;