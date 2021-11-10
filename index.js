const dotenv = require('dotenv').config();
const express = require('express');
const db = require('./utils/db')


// DB connection block 

db.authenticate()
    .then(() => console.log("Connection to DB successful!"))
    .catch(err => console.error("Unable to connect to the database. Launching the app has been aborted.", err))


const app = express();
const api_routes = require('./routes/api');
const auth_routes = require('./routes/auth');

// Middleware

app.use(express.json());

// Routes
app.use('/auth', auth_routes)
app.use('/api', api_routes)

app.get('/', (req, res) => {
    res.send('<h1>Latin Library API</h1><br><p>Will serve the React frontend... Eventually.</p>')
})

// Launch

// Force Sync during development only

db.sync({force: true});

app.listen(process.env.PORT || 5000, () => {

console.log(`App listening at port ${process.env.PORT}`)
});