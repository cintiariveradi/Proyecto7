import { Router } from "express";
import { requireAuth } from "../middlewares/authMiddleware.js";
import { register, login, verifyToken } from "../controllers/authController.js";



const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Registrar usuario
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Datos inválidos o usuario existente
 */
router.post("/register", register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve JWT
 *       401:
 *         description: Credenciales inválidas
 */
router.post("/login", login);
router.get("/verifytoken", requireAuth, verifyToken);


export default router;
