// *Package dependencies
const express = require('express');

// *Initialize Express Server
const app = express();

// *Importing individual routes
const authRoutes = require('./auth');

// *Authentication routes
app.use('/auth', authRoutes);

module.exports = app;
