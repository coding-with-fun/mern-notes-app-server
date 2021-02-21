// TODO Check for mongoose error
const mongoose = require('mongoose');
require('colors');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        });

        console.log(`MongoDB is connected...`.green);
    } catch (error) {
        console.log(`${error.message}`.red);

        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
