import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { api } from "../api/apiClient";
import { setToken } from "../auth/token";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await api.post("/api/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      // Si backend devuelve token al registrar, lo guardamos
      const token = res.data.token || res.data.accessToken;

      if (token) {
        setToken(token);
        navigate("/products", { replace: true });
      } else {
        // Si backend NO devuelve token, mandamos a login
        alert("Cuenta creada ✅ Ahora inicia sesión.");
        navigate("/login", { replace: true });
      }
    } catch (error) {
      alert(error?.response?.data?.message || "No se pudo crear la cuenta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ marginTop: "90px", display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={0}
        sx={{
          width: "90%",
          maxWidth: 650,
          mt: 6,
          p: 5,
          borderRadius: "24px",
          backgroundColor: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          color: "text.primary",
          fontFamily: "var(--body-font)",
        }}
      >
        <Typography variant="h4" fontWeight={800} sx={{ color: "primary.main", mb: 3 }}>
          Crear cuenta
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Nombre"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ sx: { color: "text.primary" } }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.15)" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.25)" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
            }}
          />

          <TextField
            label="Correo electrónico"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ sx: { color: "text.primary" } }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.15)" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.25)" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
            }}
          />

          <TextField
            label="Contraseña"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ sx: { color: "text.primary" } }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.15)" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.25)" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              mt: 1,
              py: 1.2,
              borderRadius: "14px",
              fontWeight: 800,
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "#e46b6b" },
            }}
          >
            {loading ? "Creando cuenta..." : "Registrarme"}
          </Button>
        </Box>
      </Paper>
    </main>
  );
}