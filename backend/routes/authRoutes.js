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
/**
 * @openapi
 * /api/auth/verifytoken:
 *   get:
 *     summary: Verificar token JWT
 *     description: Verifica si el token enviado es válido y devuelve la información básica del usuario autenticado.
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 65f1a2b3c4d5e6f789012345
 *                     email:
 *                       type: string
 *                       example: usuario@email.com
 *       401:
 *         description: Token inválido, expirado o no enviado
 */
router.get("/verifytoken", requireAuth, verifyToken);

/**
 * @openapi
 * /api/auth/verifytoken:
 *   get:
 *     summary: Verificar token y devolver datos del usuario
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido, devuelve usuario
 *       401:
 *         description: Token inválido o expirado
 */
router.get("/verifytoken", requireAuth, verifyToken);


export default router;
