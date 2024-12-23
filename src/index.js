import express from "express";

const app = express();

app.use("/api/auth", authRoutes)

app.listeners(5001, () => {
    console.log("server is running on port 5001")
});