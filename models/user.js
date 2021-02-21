import { v4 as uuidv4 } from 'uuid';

const crypto = require('crypto');
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

        encryptedPassword: {
            type: String,
            trim: true,
            require: true,
        }, // Encrypted Password

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

UserSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuidv4(); // Get random string
        this.encryptedPassword = this.securedPassword(password);
    })
    .get(function () {
        return this._password;
    });

UserSchema.method = {
    // *Authenticate the plain and hashed password
    authenticate: function (plainPassword) {
        return this.securedPassword(plainPassword) === this.encryptedPassword;
    },

    // *Hash the plain password
    securedPassword: function (plainPassword) {
        if (plainPassword) {
            try {
                return crypto
                    .createHmac('sha256', this.salt)
                    .update(plainPassword)
                    .digest('hex');
            } catch (error) {
                return '';
            }
        } else {
            return '';
        }
    },
};

module.exports = User = mongoose.model('User', UserSchema);
