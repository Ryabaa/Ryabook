const express = require("express");

const UserController = require("../controllers/userContoller");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { username, password, passwordConfirmation, email } = require("../validation/authValidation");
const { upload } = require("../utils/multer");

const userController = new UserController();
const router = new express.Router();

router.post("/signup", [username, password, passwordConfirmation, email], userController.signup);
router.post("/login", [username, password], userController.login);
router.get("/check-auth", authMiddleware, userController.checkAuth);
router.get("/list", roleMiddleware(["ADMIN"]), userController.getAllUsers);
router.get("/followers/:id", authMiddleware, userController.getFollowers);
router.get("/following/:id", authMiddleware, userController.getFollowing);
router.post("/follow/:id", authMiddleware, userController.followUser);
router.post("/unfollow/:id", authMiddleware, userController.unfollowUser);
router.post("/delete-follower/:id", authMiddleware, userController.deleteFollower);
router.post("/upload-avatar/:id", [authMiddleware, upload.single("avatar")], userController.uploadAvatar);
router.delete("/remove-avatar/:id", authMiddleware, userController.removeAvatar);
router.delete("/:id", roleMiddleware(["ADMIN"]), userController.deleteUser);
router.get("/:id", authMiddleware, userController.getUser);

module.exports = router;
