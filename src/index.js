import express from "express";
import authRoutes from "./routes/auth.route.js"; //need to use the .js in the end because of the "type": "module" in package.json config

const app = express();

app.use("/api/auth", authRoutes)

app.listen(5001, () => {
    console.log("server is running on port 5001")
});