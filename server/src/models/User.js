const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    avatar: {
        type: String,
        unique: false,
        required: false,
        default: "http://localhost:4000/public/defaultAvatar.jpg",
    },
    roles: [{ type: String, ref: "Role" }],
});

module.exports = mongoose.model("User", userSchema);
