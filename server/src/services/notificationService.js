const Notification = require("../models/Notification");

const getNotificationsForUser = async (req) => {
    const userId = req.params.userId;

    const subscriptionNotifications = await Notification.find({ userId, type: "subscription" }).populate(
        "actionUserId"
    );
    const likeNotifications = await Notification.find({ userId, type: "like" })
        .populate("actionUserId")
        .populate("postId");
    const commentNotifications = await Notification.find({ userId, type: "comment" })
        .populate("actionUserId")
        .populate("postId");

    const formattedNotifications = []
        .concat(
            subscriptionNotifications.map((notification) => ({
                id: notification.actionUserId._id,
                username: notification.actionUserId.username,
                avatar: notification.actionUserId.avatar,
                date: notification.createdAt,
                action: "started following you",
                following: false,
            })),
            likeNotifications.map((notification) => ({
                id: notification.actionUserId._id,
                username: notification.actionUserId.username,
                avatar: notification.actionUserId.avatar,
                post: notification.postId,
                date: notification.createdAt,
                action: "liked your post",
            })),
            commentNotifications.map((notification) => ({
                id: notification.actionUserId._id,
                username: notification.actionUserId.username,
                avatar: notification.actionUserId.avatar,
                post: notification.postId,
                comment: notification.commentText,
                date: notification.createdAt,
                action: "commented on your post",
            }))
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return formattedNotifications;
};

const markAllNotificationsAsRead = async (req, res) => {
    const userId = req.params.userId;
    await Notification.updateMany({ userId, isRead: false }, { isRead: true });
    return { message: "All notifications marked as read" };
};

const getUnreadNotificationsCount = async (req, res) => {
    const userId = req.params.userId;
    const unreadCount = await Notification.countDocuments({ userId, isRead: false });
    return unreadCount;
};

module.exports = { getNotificationsForUser, getUnreadNotificationsCount, markAllNotificationsAsRead };
