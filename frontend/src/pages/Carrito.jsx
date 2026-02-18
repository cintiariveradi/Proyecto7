import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main style={{ marginTop: "90px", width: "90%", maxWidth: "900px", marginInline: "auto" }}>
      <h1 style={{ margin: "2rem 0" }}>Carrito</h1>

      {items.length === 0 ? (
  <div
    style={{
      textAlign: "center",
      marginTop: "4rem",
      padding: "3rem",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      width: "60%",
      marginInline: "auto",
    }}
  >
    <h1
      style={{
        fontSize: "2.2rem",
        color: "var(--secondary-color-500)",
        marginBottom: "1rem",
      }}
    >
      🛒 Tu carrito está vacío
    </h1>

    <p style={{ fontSize: "1.1rem", color: "var(--intense-text)" }}>
      Aún no has agregado productos.
      Explora el catálogo y comienza tu rutina.
    </p>
  </div>
) : (

        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "1rem",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "90px", height: "90px", objectFit: "contain" }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: ".25rem 0" }}>
                  ${item.price.toLocaleString("es-CL")} × {item.qty} ={" "}
                  <strong>${(item.price * item.qty).toLocaleString("es-CL")}</strong>
                </p>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: ".6rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <hr style={{ margin: "2rem 0" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Total</h2>
            <h2 style={{ margin: 0 }}>${total.toLocaleString("es-CL")}</h2>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <button
              onClick={clearCart}
              style={{
                padding: ".9rem 1.2rem",
                borderRadius: "14px",
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Vaciar carrito
            </button>

            <button
              type="button"
              style={{
                padding: ".9rem 1.2rem",
                borderRadius: "14px",
                border: "none",
                background: "var(--secondary-color-500)",
                color: "white",
                cursor: "pointer",
                fontWeight: 800,
                flex: 1,
              }}
            >
              Ir a pagar
            </button>
          </div>
        </>
      )}
    </main>
  );
}
