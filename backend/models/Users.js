const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    UserId: {
        type: Number,
        unique: true,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    },

    GoogleId: {
        type: String
    }
});

module.exports = mongoose.model("User", UserSchema);