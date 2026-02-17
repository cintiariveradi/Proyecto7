import { useNavigate } from "react-router-dom";
import { products } from "../data/products";



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
                        <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "contain",
                display: "block",
                marginBottom: "1rem",
              }}
            />
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
