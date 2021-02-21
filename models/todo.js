const mongoose = require('mongoose');

const TODOSchema = mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestamp: true }
);

module.exports = TODO = mongoose.model('TODO', TODOSchema);
