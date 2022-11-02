const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    },
});

module.exports = userSchema;