import { useCart } from "../context/CartContext";
import { Paper, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";




export default function Carrito() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main style={{ marginTop: "calc(var(--nav-height) + 60px)"
, width: "90%", maxWidth: "900px", marginInline: "auto" }}>


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
            <Paper
  key={item.id}
  elevation={0}
  sx={{
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    p: 2,
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
  }}
>
  <img
    src={item.image}
    alt={item.name}
    style={{ width: "90px", height: "90px", objectFit: "contain" }}
  />

  <Box sx={{ flex: 1 }}>
    <Typography variant="h6" sx={{ m: 0, fontWeight: 800 }}>
      {item.name}
    </Typography>
    <Typography sx={{ mt: 0.5 }}>
      ${item.price.toLocaleString("es-CL")} × {item.qty} ={" "}
      <strong>${(item.price * item.qty).toLocaleString("es-CL")}</strong>
    </Typography>
  </Box>

  <Button
    variant="outlined"
    onClick={() => removeFromCart(item.id)}
    sx={{
      borderRadius: "12px",
      fontWeight: 800,
      borderColor: "rgba(0,0,0,0.2)",
      color: "text.primary",
      "&:hover": { borderColor: "primary.main" },
    }}
  >
    Quitar
  </Button>
</Paper>

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

           <Link to="/checkout" style={{ flex: 1, textDecoration: "none" }}>
  <Button
    variant="contained"
    fullWidth
    sx={{
      py: 1.2,
      borderRadius: "14px",
      fontWeight: 800,
      bgcolor: "primary.main",
      "&:hover": { bgcolor: "#e46b6b" },
    }}
  >
    Ir a pagar
  </Button>
</Link>

          </div>
        </>
      )}
    </main>
  );
}
