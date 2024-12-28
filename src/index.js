import express from "express";
import authRoutes from "./routes/auth.route.js"; //need to use the .js in the end because of the "type": "module" in package.json config
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

dotenv.config()

// const app = express(); {dont need to use anymore because we created a new one with socket io in socket.js}

const PORT = process.env.PORT

app.use(express.json()); //allow to extract the json data aout of the bodyrequest
app.use(cookieParser()); // allow to parse the cookie and grab the values out of it
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true //allow cookies or authorization headers to be sent with the request
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.listen(PORT, () => {
//     console.log("server is running on PORT:" + PORT)
//     connectDB()
// }); REPLACE THE APP WITH SERVER CREATED IN SOCKET.JS

server.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT)
    connectDB()
});