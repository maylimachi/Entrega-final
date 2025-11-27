import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

console.log("📌 Rutas de Auth cargadas"); 

const router = Router();

router.post("/login", login);

export default router;

