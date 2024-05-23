const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const notificationSchema = new mongoose.Schema({
    userId: { type: ObjectId, ref: "User" },
    type: String,
    actionUserId: { type: ObjectId, ref: "User" },
    postId: String,
    commentText: String,
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);
