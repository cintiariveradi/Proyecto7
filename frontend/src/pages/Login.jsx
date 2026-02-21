import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { api } from "../api/apiClient";
import { setToken } from "../auth/token";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", {
        email: form.email,
        password: form.password,
      });

      // Ajuste por si tu backend devuelve { token } o { accessToken }
      const token = res.data.token || res.data.accessToken;

      if (!token) {
        alert("No llegó token desde el backend.");
        return;
      }

      setToken(token);

      // Vuelve a donde venías (por ejemplo /checkout)
      navigate(from, { replace: true });
    } catch (error) {
      alert("Credenciales incorrectas");
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
          color: "var(--intense-text)",
          fontFamily: "var(--body-font)",
        }}
      >
        <Typography variant="h4" fontWeight={800} sx={{ color: "var(--secondary-color-500)", mb: 3 }}>
          Iniciar sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Correo electrónico"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ sx: { color: "var(--intense-text)" } }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.15)" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.25)" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "var(--secondary-color-500)" },
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
            InputLabelProps={{ sx: { color: "var(--intense-text)" } }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.15)" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.25)" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "var(--secondary-color-500)" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              py: 1.2,
              borderRadius: "14px",
              fontWeight: 800,
              backgroundColor: "var(--secondary-color-500)",
              "&:hover": { backgroundColor: "#e46b6b" },
            }}
          >
            Entrar
          </Button>
        </Box>
      </Paper>
    </main>
  );
}