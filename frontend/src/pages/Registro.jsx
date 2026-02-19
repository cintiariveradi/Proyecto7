import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function Registro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", form);
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
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ color: "primary.main", mb: 3 }}
        >
          Crear cuenta
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
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
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
                backgroundColor: "#fff",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.15)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.25)",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
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
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
                backgroundColor: "#fff",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.15)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.25)",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
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
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
                backgroundColor: "#fff",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.15)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.25)",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
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
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "#e46b6b" },
            }}
          >
            Registrarme
          </Button>
        </Box>
      </Paper>
    </main>
  );
}
