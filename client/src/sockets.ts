import { io } from "socket.io-client";
import getLocalStorage from "./utils/getLocalStorage";

export const socket = io("http://localhost:4000");

socket.emit("registerUser", getLocalStorage("id"));

export const followUserSocket = (userId: string, followerId: string) => {
    socket.emit("followUser", { userId, followerId });
};
