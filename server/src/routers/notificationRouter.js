const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const NotificationController = require("../controllers/notificationController");

const notificationController = new NotificationController();
const router = new express.Router();

router.get("/list/:userId", authMiddleware, notificationController.getNotificationsForUser);
router.get("/mark-as-read/:userId", authMiddleware, notificationController.markAllNotificationsAsRead);
router.get("/unread/:userId", authMiddleware, notificationController.getUnreadNotificationsCount);

module.exports = router;
