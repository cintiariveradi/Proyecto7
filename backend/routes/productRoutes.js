import { Router } from "express";
import {
  createProduct,
  readAllProducts,
  readOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = Router();

// Públicas
router.get("/readall", readAllProducts);
router.get("/readone/:id", readOneProduct);

// Protegidas
router.post("/create", requireAuth, createProduct);
router.put("/update/:id", requireAuth, updateProduct);
router.delete("/delete/:id", requireAuth, deleteProduct);

export default router;
