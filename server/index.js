require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

const userRouter = require("./src/routers/userRouter");
const notificationRouter = require("./src/routers/notificationRouter");
const { handleFollowUser } = require("./src/handlers/notrificationHandler");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    next();
});
app.use(cors());

app.use("/user", userRouter);
app.use("/notification", notificationRouter);

app.use(express.static(__dirname));

const start = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECT + process.env.DB_NAME, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const server = await app.listen(port, () => {
            console.log(`Server started on http://${process.env.DOMAIN}:${port}`);
        });

        const io = socketIo(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
        });

        const userSocketMap = {};

        io.on("connection", (socket) => {
            console.log("New client connected");

            socket.on("registerUser", (userId) => {
                userSocketMap[userId] = socket.id;
            });

            socket.on("followUser", ({ userId, followerId }) => {
                handleFollowUser(io, userSocketMap, userId, followerId);
            });

            socket.on("disconnect", () => {
                for (let userId in userSocketMap) {
                    if (userSocketMap[userId] === socket.id) {
                        delete userSocketMap[userId];
                        break;
                    }
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
};

start();
