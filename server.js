const express = require('express');

const PORT = 5000;

// *Initialize Express Server
const app = express();

// *Defining Port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

// *Defining Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
