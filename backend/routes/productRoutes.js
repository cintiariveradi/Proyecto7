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
/**
 * @openapi
 * /api/product/readbystep/{step}:
 *   get:
 *     summary: Obtener un producto por número de paso
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: step
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: No encontrado
 */
router.get("/readbystep/:step", readByStep);
/**
 * @openapi
 * /api/product/readone/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: No encontrado
 */
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
/**
 * @openapi
 * /api/product/update/{id}:
 *   put:
 *     summary: Actualizar un producto (requiere token)
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 */
router.put("/update/:id", requireAuth, updateProduct);
/**
 * @openapi
 * /api/product/delete/{id}:
 *   delete:
 *     summary: Eliminar un producto (requiere token)
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       401:
 *         description: No autorizado
 *       404:
 *         description: No encontrado
 */
router.delete("/delete/:id", requireAuth, deleteProduct);


export default router;
