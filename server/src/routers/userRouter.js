const express = require("express");
const UserController = require("../controllers/userContoller");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { username, password, passwordConfirmation, email } = require("../validation/authValidation");

const userController = new UserController();
const router = new express.Router();

router.post("/signup", [username, password, passwordConfirmation, email], userController.signup);
router.post("/login", [username, password], userController.login);
router.get("/list", roleMiddleware(["ADMIN"]), userController.getAllUsers);
router.get("/followers/:id", authMiddleware, userController.getFollowers);
router.get("/following/:id", authMiddleware, userController.getFollowing);
router.post("/follow/:id", authMiddleware, userController.followUser);
router.post("/unfollow/:id", authMiddleware, userController.unfollowUser);
router.delete("/:id", roleMiddleware(["ADMIN"]), userController.deleteUser);
router.get("/:id", authMiddleware, userController.getUser);

module.exports = router;
