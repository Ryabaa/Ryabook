const service = require("../services/postService");

class PostController {
    async addNewPost(req, res) {
        try {
            const file = req.file;
            if (!file) {
                return res.status(400).json("No file uploaded");
            }
            const result = await service.addNewPost(req.params.userId, file);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Add new post error" });
        }
    }
    async getPostList(req, res) {
        try {
            const result = await service.getPostList(req, res);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Get post list error" });
        }
    }
    async likePost(req, res) {
        try {
            const result = await service.likePost(req, res);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Liking post error" });
        }
    }
    async commentPost(req, res) {
        try {
            const result = await service.commentPost(req, res);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Commenting post error" });
        }
    }
}

module.exports = PostController;
