import express from "express"
import { login, signup,logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.purge("/update-profile", protectRoute, updateProfile)

export default router;