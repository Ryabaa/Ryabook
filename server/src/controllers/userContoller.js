const service = require("../services/userService");
const { validationResult } = require("express-validator");

class userController {
    async signup(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(203).json({ message: errors.errors[0].msg });
            }
            const result = await service.signup(req.body, res);
            res.status(result.status || 201).json({ ...result, message: result.message });
        } catch (error) {
            res.status(400).json({ error: "Sign up error" });
        }
    }
    async login(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(203).json({ success: false, message: errors.errors[0].msg });
            }
            const result = await service.login(req.body, res);
            res.status(result.status || 201).json({ ...result, message: result.message });
        } catch (error) {
            res.status(400).json({ error: "Login error" });
        }
    }
    async checkAuth(req, res) {
        try {
            res.status(201).json({ message: "User authorized" });
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async getAllUsers(req, res) {
        try {
            const result = await service.getAllUsers();
            res.status(201).json({ users: result, message: "You are ADMIN" });
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async getUser(req, res) {
        try {
            const result = await service.getUser(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async deleteUser(req, res) {
        try {
            const result = await service.deleteUser(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async followUser(req, res) {
        try {
            const result = await service.followUser(req);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async unfollowUser(req, res) {
        try {
            const result = await service.unfollowUser(req);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async deleteFollower(req, res) {
        try {
            const result = await service.deleteFollower(req);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async getFollowers(req, res) {
        try {
            const result = await service.getFollowers(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async getFollowing(req, res) {
        try {
            const result = await service.getFollowing(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async uploadAvatar(req, res) {
        try {
            const file = req.file;
            if (!file) {
                return res.status(400).send("No file uploaded");
            }
            const result = await service.uploadAvatar(req.params.id, file);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async removeAvatar(req, res) {
        try {
            console.log(req.params.id);
            const result = await service.removeAvatar(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
}

module.exports = userController;
