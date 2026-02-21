import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger.js";




dotenv.config();
console.log("STRIPE_SECRET_KEY existe?", Boolean(process.env.STRIPE_SECRET_KEY));

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));



app.get("/", (req, res) => res.send("API 5 Steps Only OK ✅"));


const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado ✅"))
  .catch((err) => console.error("Error MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
