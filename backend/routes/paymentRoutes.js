import express from "express";
import { createCheckoutSession } from "../controllers/paymentController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Ruta protegida: solo usuarios logueados pueden iniciar pago
router.post("/create-checkout-session", requireAuth, createCheckoutSession);

export default router;