const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            require: true,
        },
        userName: {
            type: String,
            trim: true,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            require: true,
        },
        salt: String,
        todoList: {
            type: Array,
            default: [],
        },
        notesList: {
            type: Array,
            default: [],
        },
    },
    { timestamp }
);

module.exports = User = mongoose.model('User', UserSchema);
