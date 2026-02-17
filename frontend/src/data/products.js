import step1Img from "../assets/Limpiador.png";
import step2Img from "../assets/Tonico.png";
import step3Img from "../assets/Serum.png";
import step4Img from "../assets/Crema.png";
import step5Img from "../assets/Bloqueador.png";
import pack from "../assets/herofinal.png";


export const products = [
  {
    id: "1",
    name: "Paso 1 – Limpiador",
    price: 12990,
    image: step1Img,
    ingredients: "Ingredientes del limpiador.",
    usage: "Modo de uso del limpiador."
  },
  {
    id: "2",
    name: "Paso 2 – Tónico",
    price: 10990,
    image: step2Img,
    ingredients: "Ingredientes del tónico.",
    usage: "Modo de uso del tónico."
  },
  {
    id: "3",
    name: "Paso 3 – Sérum",
    price: 15990,
    image: step3Img,
    ingredients: "Ingredientes del sérum.",
    usage: "Modo de uso del sérum."
  },
  {
    id: "4",
    name: "Paso 4 – Hidratante",
    price: 14990,
    image: step4Img,
    ingredients: "Ingredientes del hidratante.",
    usage: "Modo de uso del hidratante."
  },
  {
    id: "5",
    name: "Paso 5 – Protector solar",
    price: 17990,
    image: step5Img,
    ingredients: "Ingredientes del protector solar.",
    usage: "Modo de uso del protector solar."
  },
  
  {
  id: "6",
  name: "Pack Completo 5 Steps",
  price: 64990,
  image: pack,
  ingredients: "Incluye los 5 productos de la rutina completa.",
  usage: "Usar siguiendo el orden de la rutina 5 Steps Only."
}


];
