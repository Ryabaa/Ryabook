const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new Schema({
    postId: { type: ObjectId, ref: "Post", required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
