import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { api } from "../api/apiClient";

export default function ProductDetail() {
  const { id } = useParams(); // aquí llega _id de Mongo
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
  const load = async () => {
    setLoading(true);
    try {
      const raw = String(id);
      const isStep = raw.startsWith("step-");

      const endpoint = isStep
        ? `/api/product/readbystep/${raw.replace("step-", "")}`
        : `/api/product/readone/${raw}`;

      const res = await api.get(endpoint);
      setProduct(res.data);
    } catch (e) {
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  load();
}, [id]);

  if (loading) {
    return (
      <main style={{ marginTop: "90px", textAlign: "center" }}>
        <h1>Cargando…</h1>
      </main>
    );
  }

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
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: "520px",
            height: "auto",
            display: "block",
            margin: "0 auto 1.5rem",
            objectFit: "contain",
          }}
        />

        <h1>{product.name}</h1>

        <p style={{ fontSize: "1.4rem", fontWeight: 700, margin: "1rem 0" }}>
          ${Number(product.price).toLocaleString("es-CL")}
        </p>

        <div style={{ margin: "1rem 0" }}>
          <label style={{ fontWeight: "600" }}>Cantidad: </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{
              width: "60px",
              marginLeft: "10px",
              padding: "0.4rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          />
        </div>

        <button
          onClick={() => {
            addToCart({
              id: product._id, // importante: el id real
              name: product.name,
              price: product.price,
              image: product.image,
              qty: quantity,
            });
            setAdded(true);
          }}
          style={{
            padding: "0.8rem 1.4rem",
            borderRadius: "12px",
            border: "none",
            background: added ? "#9f4e4e" : "var(--secondary-color-500)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all .2s ease",
          }}
        >
          {added ? "✓ Agregado" : "Agregar al carrito"}
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