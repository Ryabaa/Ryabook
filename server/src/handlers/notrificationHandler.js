const Notification = require("../models/Notification");

const handleFollowUser = async (io, userSocketMap, userId, followerId) => {
    try {
        const notification = new Notification({
            userId: followerId,
            type: "subscription",
            actionUserId: userId,
            isRead: false,
            createdAt: Date.now(),
        });
        await notification.save();

        const populatedNotification = await Notification.findById(notification._id)
            .populate("actionUserId")
            .exec();

        const formattedNotification = {
            id: populatedNotification.actionUserId._id,
            username: populatedNotification.actionUserId.username,
            avatar: populatedNotification.actionUserId.avatar,
            date: populatedNotification.createdAt,
            action: "started following you",
        };

        const followerSocketId = userSocketMap[followerId];

        if (followerSocketId) {
            io.to(followerSocketId).emit("newNotification", formattedNotification);
        } else {
            console.log("Socket for user not found:", followerId);
        }
    } catch (error) {
        console.error("Error creating notification:", error);
    }
};

module.exports = {
    handleFollowUser,
};
