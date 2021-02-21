const crypto = require('crypto');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },

        userName: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },

        encryptedPassword: {
            type: String,
            trim: true,
            required: true,
        }, // Encrypted Password

        salt: String,

        todoList: [
            {
                type: ObjectId,
                ref: 'TODO',
                required: true,
            },
        ],

        notesList: [
            {
                type: ObjectId,
                ref: 'Note',
                required: true,
            },
        ],
    },
    { timestamp: true }
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
