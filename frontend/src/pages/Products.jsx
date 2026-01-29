import { useNavigate } from "react-router-dom";

const products = [
  { id: "1", name: "Paso 1 – Limpiador", price: 12990 },
  { id: "2", name: "Paso 2 – Tónico", price: 10990 },
  { id: "3", name: "Paso 3 – Sérum", price: 15990 },
  { id: "4", name: "Paso 4 – Hidratante", price: 14990 },
  { id: "5", name: "Paso 5 – Protector solar", price: 17990 },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <main style={{ marginTop: "90px" }}>
      <h1 style={{ textAlign: "center" }}>Catálogo 5 Steps Only</h1>

      <section className="products-grid">
        {products.map((p) => (
          <div
            className="product-card"
            key={p.id}
            onClick={() => navigate(`/products/${p.id}`)}
            style={{ cursor: "pointer" }}
          >
            <h2 style={{ fontSize: "1.1rem" }}>{p.name}</h2>
            <p style={{ marginTop: ".5rem", fontWeight: 700 }}>
              ${p.price.toLocaleString("es-CL")}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
