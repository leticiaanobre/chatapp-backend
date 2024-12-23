import express from "express";
import authRoutes from "./routes/auth.route.js"; //need to use the .js in the end because of the "type": "module" in package.json config
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";

dotenv.config()

const app = express();

const PORT = process.env.PORT

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT)
    connectDB()
});