import { Router } from "express";
import { requireAuth } from "../middlewares/authMiddleware.js";
import { register, login, verifyToken } from "../controllers/authController.js";



const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verifytoken", requireAuth, verifyToken);


export default router;
