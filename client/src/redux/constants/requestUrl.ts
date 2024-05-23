const userRoute = "http://localhost:4000/user/";
const notificationRoute = "http://localhost:4000/notification/";

export const reqestUrl = {
    user: userRoute,
    signUp: userRoute + "signup/",
    login: userRoute + "login/",
    followers: userRoute + "followers/",
    following: userRoute + "following/",
    followUser: userRoute + "follow/",
    unfollowUser: userRoute + "unfollow/",
    deleteFollower: userRoute + "delete-follower/",
    getNotifications: notificationRoute + "list/",
    getUnreadNotificationsCount: notificationRoute + "unread/",
    markAllNotificationsAsRead: notificationRoute + "mark-as-read/",
};
