import { Router } from "express";
import {
  createProduct,
  readAllProducts,
  readOneProduct,
  updateProduct,
  deleteProduct,
  readByStep
} from "../controllers/productController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";


const router = Router();
/**
 * @openapi
 * /api/product/readall:
 *   get:
 *     summary: Obtener todos los productos
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Lista de productos
 */

router.get("/readall", readAllProducts);
router.get("/readbystep/:step", readByStep);
router.get("/readone/:id", readOneProduct);

/**
 * @openapi
 * /api/product/create:
 *   post:
 *     summary: Crear un producto (requiere token)
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               step:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto creado
 *       401:
 *         description: No autorizado
 */
router.post("/create", requireAuth, createProduct);
router.put("/update/:id", requireAuth, updateProduct);
router.delete("/delete/:id", requireAuth, deleteProduct);


export default router;
