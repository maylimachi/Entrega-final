import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getAllProducts);
router.get("/:id", authMiddleware, getProductById);
router.post("/create", authMiddleware, createProduct);
router.delete("/:id", authMiddleware, deleteProduct);
router.delete("/custom/:customId", deleteProductByCustomId);


export default router;

