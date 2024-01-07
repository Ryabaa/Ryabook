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
            const result = await service.followUser(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
}

module.exports = userController;
