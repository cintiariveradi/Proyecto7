import { Link } from "react-router-dom";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutSuccess() {
  const { clearCart } = useCart();

        useEffect(() => {
          clearCart();
        }, [clearCart]);


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
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={900} sx={{ color: "primary.main", mb: 1 }}>
          ¡Pago exitoso! ✅
        </Typography>

        <Typography sx={{ color: "text.primary", mb: 3 }}>
          Gracias por tu compra. Tu pago se procesó correctamente.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ fontWeight: 800, borderRadius: "14px", bgcolor: "primary.main" }}>
              Volver al catálogo
            </Button>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" sx={{ fontWeight: 800, borderRadius: "14px" }}>
              Ir al Home
            </Button>
          </Link>
        </Box>
      </Paper>
    </main>
  );
}