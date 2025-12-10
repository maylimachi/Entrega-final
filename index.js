import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API de Productos funcionando 🚀");
});

app.use("/auth/products", productsRoutes);
app.use("/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
  });
});

export default app;

