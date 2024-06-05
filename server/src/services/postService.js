const Post = require("../models/Post");
const Comment = require("../models/Comment");
const { saveFile } = require("../utils/multer");

const addNewPost = async (userId, file) => {
    saveFile(file, "posts", userId, async (err, uniqueName) => {
        const post = new Post({
            userId: userId,
            imageUrl: `http://localhost:4000/storage/posts/${uniqueName}`,
        });
        post.save();
    });
    return { message: "Post added successfully" };
};

const getPostList = async (req, res) => {
    const userId = req.params.userId;
    const posts = await Post.find({ userId: userId }).populate("comments");
    return posts;
};

const likePost = async (req, res) => {
    const userId = req.params.userId;
    const postId = req.body.data;
    const post = await Post.findById(postId);

    if (!userId || !postId) {
        return { message: "User not found" };
    }

    if (!post.likes.includes(userId)) {
        post.likes.push(userId);
    } else {
        post.likes = post.likes.filter((id) => id.toString() !== userId);
    }
    await post.save();
    return post;
};

const commentPost = async (req, res) => {
    const userId = req.params.userId;
};

module.exports = { addNewPost, getPostList, likePost, commentPost };
