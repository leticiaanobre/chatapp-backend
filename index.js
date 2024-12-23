import express from "express";

const app = express();

app.listeners(5001, () => {
    console.log("server is running on port 5001")
});