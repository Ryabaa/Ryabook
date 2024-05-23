const service = require("../services/notificationService");

class NotificationController {
    async getNotificationsForUser(req, res) {
        try {
            const result = await service.getNotificationsForUser(req);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Get notifications error" });
        }
    }
    async markAllNotificationsAsRead(req, res) {
        try {
            const result = await service.markAllNotificationsAsRead(req);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Mark notifications as read error" });
        }
    }
    async getUnreadNotificationsCount(req, res) {
        try {
            const result = await service.getUnreadNotificationsCount(req);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Get unread notifications count error" });
        }
    }
}

module.exports = NotificationController;
