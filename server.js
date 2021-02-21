const express = require('express');
require('colors');

const connectDB = require('./config/db');
const PORT = 5000;

// *Initialize Express Server
const app = express();

// *Defining Port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`.green);
});

// *Connect to MongoDB
connectDB();

// *Defining Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
