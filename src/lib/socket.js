import { Server } from "socket.io";
import http from "http";
import express from "express"

const app =express()
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"]
    }
})

//used to store online users
const userSocketMap = {} //{userId: socketId}

// listen to any incoming connections
io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId =socket.handshake.query.userId
    if(userId) userSocketMap[userId] = socket.id //whenever the user is online, we update it in the server

    //io.emmit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap)) //broadcast to every single user tha is connected

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id)
    })
})

export {io, app, server}