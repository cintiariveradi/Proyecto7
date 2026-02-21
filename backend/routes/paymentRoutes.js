import express from "express";
import { createCheckoutSession } from "../controllers/paymentController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();
/**
 * @openapi
 * /api/payments/create-checkout-session:
 *   post:
 *     summary: Crear sesión de pago en Stripe (requiere token)
 *     tags:
 *       - Payments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sesión creada correctamente
 *       401:
 *         description: No autorizado
 */
// Ruta protegida: solo usuarios logueados pueden iniciar pago
router.post("/create-checkout-session", requireAuth, createCheckoutSession);

export default router;