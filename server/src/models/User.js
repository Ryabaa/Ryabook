const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    avatar: {
        contentType: String,
        data: Buffer,
        unique: false,
        required: false,
    },
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
    mail: {
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
    followers: [{ type: ObjectId, ref: "User", required: false }],
    following: [{ type: ObjectId, ref: "User", required: false }],
    roles: [{ type: String, ref: "Role" }],
});

module.exports = mongoose.model("User", userSchema);
