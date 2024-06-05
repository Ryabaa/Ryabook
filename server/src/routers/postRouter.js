const express = require("express");

const PostController = require("../controllers/postController");
const authMiddleware = require("../middlewares/authMiddleware");
const { upload } = require("../utils/multer");

const postController = new PostController();
const router = new express.Router();

router.post("/upload/:userId", [authMiddleware, upload.single("post")], postController.addNewPost);
router.get("/list/:userId", authMiddleware, postController.getPostList);
router.post("/like/:userId", authMiddleware, postController.likePost);
router.post("/comment/:postId", authMiddleware, postController.commentPost);

module.exports = router;
