import { Link } from "react-router-dom";
import { Paper, Typography, Box, Button, Divider } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { api } from "../api/apiClient";

export default function Checkout() {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePay = async () => {
    try {
      setLoading(true);

      const payload = {
        items: items.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.qty,
        })),
      };

      const { data } = await api.post("/api/payments/create-checkout-session", payload);

      if (!data?.url) throw new Error("No llegó la url de Stripe");
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "No se pudo iniciar el pago (Stripe).");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <main
        style={{
          marginTop: "calc(var(--nav-height) + 60px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "90%",
            maxWidth: 900,
            p: 5,
            borderRadius: "24px",
            backgroundColor: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={900} sx={{ color: "primary.main", mb: 1 }}>
            Checkout
          </Typography>

          <Typography sx={{ color: "text.primary", mb: 3 }}>
            Tu carrito está vacío. Agrega productos para continuar.
          </Typography>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ fontWeight: 800, borderRadius: "14px", bgcolor: "primary.main" }}>
              Ir al catálogo
            </Button>
          </Link>
        </Paper>
      </main>
    );
  }

  return (
    <main style={{ marginTop: "calc(var(--nav-height) + 60px)", display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={0}
        sx={{
          width: "90%",
          maxWidth: 900,
          p: 5,
          borderRadius: "24px",
          backgroundColor: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        }}
      >
        <Typography variant="h4" fontWeight={900} sx={{ color: "primary.main", mb: 3 }}>
          Checkout
        </Typography>

        <Typography sx={{ fontWeight: 800, mb: 1 }}>Resumen</Typography>
        <Divider sx={{ mb: 2, opacity: 0.4 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {items.map((item) => (
            <Box key={item.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img src={item.image} alt={item.name} style={{ width: 54, height: 54, objectFit: "contain" }} />
                <Box>
                  <Typography sx={{ fontWeight: 800 }}>{item.name}</Typography>
                  <Typography sx={{ opacity: 0.8 }}>
                    {item.qty} × ${item.price.toLocaleString("es-CL")}
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ fontWeight: 900 }}>
                ${(item.price * item.qty).toLocaleString("es-CL")}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3, opacity: 0.4 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" fontWeight={900}>
            Total
          </Typography>
          <Typography variant="h6" fontWeight={900}>
            ${total.toLocaleString("es-CL")}
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{
            py: 1.3,
            borderRadius: "14px",
            fontWeight: 900,
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "#e46b6b" },
          }}
          onClick={handlePay}
        >
          {loading ? "Redirigiendo a Stripe..." : "Continuar a pago"}
        </Button>

        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link to="/carrito" style={{ color: "inherit" }}>
            Volver al carrito
          </Link>
        </Box>
      </Paper>
    </main>
  );
}