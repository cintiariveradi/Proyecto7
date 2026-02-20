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

router.get("/readall", readAllProducts);
router.get("/readbystep/:step", readByStep);
router.get("/readone/:id", readOneProduct);


router.post("/create", requireAuth, createProduct);
router.put("/update/:id", requireAuth, updateProduct);
router.delete("/delete/:id", requireAuth, deleteProduct);


export default router;
