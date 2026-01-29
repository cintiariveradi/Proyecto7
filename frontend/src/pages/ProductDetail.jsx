import { useParams } from "react-router-dom";
const products = [
  {
    id: "1",
    name: "Paso 1 – Limpiador",
    price: 12990,
    ingredients: "Ingredientes del limpiador (placeholder).",
    usage: "Modo de uso del limpiador (placeholder).",
  },
  {
    id: "2",
    name: "Paso 2 – Tónico",
    price: 10990,
    ingredients: "Ingredientes del tónico (placeholder).",
    usage: "Modo de uso del tónico (placeholder).",
  },
  {
    id: "3",
    name: "Paso 3 – Sérum",
    price: 15990,
    ingredients: "Ingredientes del sérum (placeholder).",
    usage: "Modo de uso del sérum (placeholder).",
  },
  {
    id: "4",
    name: "Paso 4 – Hidratante",
    price: 14990,
    ingredients: "Ingredientes del hidratante (placeholder).",
    usage: "Modo de uso del hidratante (placeholder).",
  },
  {
    id: "5",
    name: "Paso 5 – Protector solar",
    price: 17990,
    ingredients: "Ingredientes del protector solar (placeholder).",
    usage: "Modo de uso del protector solar (placeholder).",
  },
];


export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) {
  return (
    <main style={{ marginTop: "90px", textAlign: "center" }}>
      <h1>Producto no encontrado</h1>
    </main>
  );
}


  

  return (
    <main style={{ marginTop: "90px" }}>
      <section style={{ width: "80%", margin: "2rem auto" }}>
       <h1>{product.name}</h1>


        <p style={{ fontSize: "1.4rem", fontWeight: 700, margin: "1rem 0" }}>
  ${product.price.toLocaleString("es-CL")}
</p>


        <button
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            border: "none",
            background: "#fc8383",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Agregar al carrito
        </button>

        <hr style={{ margin: "2rem 0" }} />

        <section>
          <h2>Ingredientes</h2>
          <p>{product.ingredients}</p>

        </section>

        <section style={{ marginTop: "1.5rem" }}>
          <h2>Modo de uso</h2>
          <p>{product.usage}</p>

        </section>
      </section>
    </main>
  );
}
