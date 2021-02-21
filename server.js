/**
 *  --------------------
 *  Package dependencies
 *  --------------------
 */
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
require('colors');
require('dotenv').config();

/**
 *  ---------------------
 *  Internal dependencies
 *  ---------------------
 */
const connectDB = require('./config/db');
const indexRouters = require('./routes/router');

/**
 *  ------------------
 *  Defining constants
 *  ------------------
 */
const PORT = process.env.PORT || 5000;

/**
 *  -------------------------
 *  Initialize Express Server
 *  -------------------------
 */
const app = express();

/**
 *  ----------------------
 *  Configuring middleware
 *  ----------------------
 */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

/**
 *  ------------------------
 *  Defining Port Connection
 *  ------------------------
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`.green);
});

/**
 *  ------------------
 *  Connect to MongoDB
 *  ------------------
 */
connectDB();

/**
 *  ---------------
 *  Defining Routes
 *  ---------------
 */
app.use('/api', indexRouters);
