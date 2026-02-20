import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/apiClient";
import { products as fallbackProducts } from "../data/products";





export default function Products() {
  const navigate = useNavigate();
const [items, setItems] = useState(fallbackProducts);

useEffect(() => {
  const load = async () => {
    try {
      const res = await api.get("/api/product/readall");
      if (Array.isArray(res.data) && res.data.length >= fallbackProducts.length) {
  setItems(
    res.data.map((p) => ({
      ...p,
      id: p.id || p._id,
    }))
  );
}
    } catch (e) {
      console.error("Error cargando productos:", e);
    }
  };

  load();
}, []);


  return (
    <main style={{ marginTop: "90px" }}>
      <h1 style={{ textAlign: "center" }}>Catálogo 5 Steps Only</h1>
      <p
  style={{
    textAlign: "center",
    maxWidth: "900px",
    margin: "1rem auto 2.5rem",
    lineHeight: "1.7",
    fontSize: "1.05rem",
  }}
>
  Puedes armar tu rutina a tu ritmo: compra <strong>un paso específico</strong> según tu necesidad,
  o elige el <strong>Pack Completo</strong> si quieres la rutina completa con descuento.
</p>



      <section className="products-grid">
        {items.map((p) => (
          <div
            className="product-card"
            key={p._id || p.id}
            onClick={() => navigate(`/products/${p._id || p.id}`)}
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
