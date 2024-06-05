const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new Schema({
    userId: { type: ObjectId, ref: "User", required: true },
    imageUrl: { type: String, required: true },
    //description: { type: String },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [{ type: ObjectId, ref: "Comment" }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
