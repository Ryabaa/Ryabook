const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config");

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

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

const getUser = async (id) => {
    const user = await User.findById(id);
    return { user };
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

    currentUser.following.push(userToFollow._id);
    userToFollow.followers.push(currentUser._id);

    await currentUser.save();
    await userToFollow.save();

    return { message: "User follow success" };
};

const unfollowUser = async (req) => {
    const currentUser = await User.findById(req.body.currentUserId);
    const userToUnfollow = await User.findById(req.params.id);

    if (!currentUser || !userToUnfollow) {
        return { message: "User not found" };
    }

    currentUser.following.pull(userToUnfollow._id);
    userToUnfollow.followers.pull(currentUser._id);

    await currentUser.save();
    await userToUnfollow.save();

    return { message: "User unfollowed success" };
};

const getFollowers = async (id) => {
    const currentUser = await User.findById(id).populate("followers");
    return { followers: currentUser.followers };
};

const getFollowing = async (id) => {
    const currentUser = await User.findById(id).populate("following");
    return { following: currentUser.following };
};

module.exports = {
    signup,
    login,
    getAllUsers,
    getUser,
    deleteUser,
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
};
