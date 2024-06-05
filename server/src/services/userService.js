const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { secret } = require("../../config");
const { deleteFileIfExists, saveFile } = require("../utils/multer");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles,
    };
    return jwt.sign(payload, secret, { expiresIn: "72h" });
};

const signup = async (userData) => {
    const { avatar, username, password, email } = userData;
    const candidate = await User.findOne({ username });
    if (candidate) {
        return { status: 203, message: "Username already taken" };
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "USER" });
    const user = new User({
        username: username,
        password: hashPassword,
        avatar: avatar,
        email: email,
        roles: [userRole.value],
    });
    await user.save();

    const { id, roles } = user;
    const token = generateAccessToken(id, roles);

    return { success: true, id: id, token: token, message: `Registration completed successfully` };
};

const login = async (userData) => {
    const { username, password } = userData;
    const user = await User.findOne({ username });
    if (!user) {
        return { status: 203, success: false, message: `User ${username} not found` };
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return { status: 203, success: false, message: `Invalid password` };
    }

    const { id, roles } = user;
    const token = generateAccessToken(id, roles);

    return { success: true, id: id, token: token, message: "Login completed successful" };
};

const getUser = async (id) => {
    const user = await User.findById(id);
    const formattedUser = {
        id: user._id,
        email: user.email,
        username: user.username,
        avatar: user.avatar,
        followers: user.followers.length,
        following: user.following.length,
    };
    return formattedUser;
};

const deleteUser = async (id) => {
    const user = await User.findById(id);
    if (user.roles.includes("ADMIN")) {
        return { message: "This user is Admin" };
    } else {
        await User.findByIdAndDelete(id);
        return { message: "User deleted" };
    }
};

const followUser = async (req) => {
    const currentUser = await User.findById(req.body.currentUserId);
    const userToFollow = await User.findById(req.params.id);

    if (!currentUser || !userToFollow) {
        return { message: "User not found" };
    }

    if (!currentUser.following.includes(userToFollow._id)) {
        currentUser.following.push(userToFollow._id);
    }
    if (!userToFollow.followers.includes(currentUser._id)) {
        userToFollow.followers.push(currentUser._id);
    }

    await currentUser.save();
    await userToFollow.save();

    const updatedUser = await User.findById(req.body.currentUserId)
        .populate("followers")
        .populate("following");

    return { followers: updatedUser.followers, following: updatedUser.following };
};

const unfollowUser = async (req) => {
    const currentUser = await User.findById(req.body.currentUserId);
    const userToUnfollow = await User.findById(req.params.id);

    if (!currentUser || !userToUnfollow) {
        return { message: "User not found" };
    }

    if (currentUser.following.includes(userToUnfollow._id)) {
        currentUser.following.pull(userToUnfollow._id);
    }

    if (userToUnfollow.followers.includes(currentUser._id)) {
        userToUnfollow.followers.pull(currentUser._id);
    }

    await currentUser.save();
    await userToUnfollow.save();

    const updatedUser = await User.findById(req.body.currentUserId)
        .populate("followers")
        .populate("following");

    return { followers: updatedUser.followers, following: updatedUser.following };
};

const deleteFollower = async (req) => {
    const currentUser = await User.findById(req.body.currentUserId);
    const userToDelete = await User.findById(req.params.id);

    if (!currentUser || !userToDelete) {
        return { message: "User not found" };
    }

    if (currentUser.followers.includes(userToDelete._id)) {
        currentUser.followers.pull(userToDelete._id);
    }

    if (userToDelete.following.includes(currentUser._id)) {
        userToDelete.following.pull(currentUser._id);
    }

    await currentUser.save();
    await userToDelete.save();

    const updatedUser = await User.findById(req.body.currentUserId)
        .populate("followers")
        .populate("following");

    return { followers: updatedUser.followers, following: updatedUser.following };
};

const getFollowers = async (id) => {
    const currentUser = await User.findById(id).populate("followers");
    return currentUser.followers;
};

const getFollowing = async (id) => {
    const currentUser = await User.findById(id).populate("following");
    return currentUser.following;
};

const uploadAvatar = async (userId, file) => {
    const user = await User.findById(userId);
    if (user.avatar !== "http://localhost:4000/public/defaultAvatar.jpg") {
        deleteFileIfExists(userId);
    }
    saveFile(file, "avatars", userId, async (err, uniqueName) => {
        user.avatar = `http://localhost:4000/storage/avatars/${uniqueName}`;
        user.save();
        return { message: "Avatar uploaded successfully" };
    });
};

const removeAvatar = async (userId) => {
    deleteFileIfExists(userId);
    const filePath = "http://localhost:4000/public/defaultAvatar.jpg";
    await User.findByIdAndUpdate(userId, { avatar: filePath }, { new: true });
    return { message: "Avatar deleted successfully" };
};

module.exports = {
    signup,
    login,
    getUser,
    deleteUser,
    followUser,
    unfollowUser,
    deleteFollower,
    getFollowers,
    getFollowing,
    uploadAvatar,
    removeAvatar,
};
