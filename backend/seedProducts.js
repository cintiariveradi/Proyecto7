import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado ✅");

    // Borra productos actuales (para no duplicar)
    await Product.deleteMany({});
    console.log("Productos anteriores eliminados 🧹");

    const products = [
      {
        step: 1,
        name: "Paso 1 – Limpiador",
        price: 12990,
        image: "/assets/Limpiador.png",
        ingredients:
          "Pantenol, ácido glicólico en baja concentración y extractos calmantes. Fórmula sin fragancias añadidas y apta para pieles sensibles.",
        usage:
          "Aplicar sobre el rostro húmedo, masajear suavemente durante 30 segundos y enjuagar con agua tibia. Usar mañana y noche como primer paso de la rutina.",
      },
      {
        step: 2,
        name: "Paso 2 – Tónico",
        price: 10990,
        image: "/assets/Tonico.png",
        ingredients:
          "Centella asiática, minerales y sales del Himalaya y agentes humectantes suaves. Fórmula calmante pensada para piel sensible.",
        usage:
          "Aplicar después de la limpieza sobre la piel seca. Puedes usarlo con las manos a toquecitos o con un algodón, sin frotar. Continuar con el sérum. Usar mañana y noche.",
      },
      {
        step: 3,
        name: "Paso 3 – Sérum",
        price: 15990,
        image: "/assets/Serum.png",
        ingredients:
          "Ácido hialurónico, centella asiática y complejo hidratante de textura ligera. Enfocado en aportar luminosidad y mantener la piel hidratada.",
        usage:
          "Aplicar 2–3 gotas en rostro y cuello después del tónico. Masajear suavemente hasta que se absorba. Continuar con la crema hidratante. Usar mañana y noche.",
      },
      {
        step: 4,
        name: "Paso 4 – Hidratante",
        price: 14990,
        image: "/assets/Crema.png",
        ingredients:
          "Niacinamida, minerales volcánicos y activos nutritivos que ayudan a mantener la barrera cutánea. Sin fragancias añadidas y apta para todo tipo de piel.",
        usage:
          "Aplicar una cantidad pequeña sobre rostro y cuello después del sérum. Masajear hasta absorber. En la rutina de noche puede ser el último paso; en la mañana continuar con protector solar.",
      },
      {
        step: 5,
        name: "Paso 5 – Protector solar",
        price: 17990,
        image: "/assets/Bloqueador.png",
        ingredients:
          "Ácido hialurónico, vitaminas y complejo de filtros solares SPF50+ de absorción rápida. Fórmula hidratante para uso diario.",
        usage:
          "Aplicar como último paso de la rutina de mañana (cantidad generosa) en rostro, cuello y zonas expuestas. Reaplicar cada 2–3 horas si hay sol directo, sudor o exposición prolongada.",
      },
      {
        step: 6,
        name: "Pack Completo 5 Steps Only",
        price: 64990,
        image: "/assets/herofinal.png",
        ingredients: "Incluye los 5 productos de la rutina completa.",
        usage: "Usar siguiendo el orden de la rutina 5 Steps Only.",
      },
    ];

    const inserted = await Product.insertMany(products);
    console.log(`Insertados ✅: ${inserted.length} productos`);

    await mongoose.disconnect();
    console.log("MongoDB desconectado 👋");
  } catch (err) {
    console.error("Error seed:", err);
    process.exit(1);
  }
};

seed();