import { useEffect, useState } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { api } from "../api/apiClient";
import { clearToken } from "../auth/token";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/api/auth/verifytoken");
        setUser(res.data);
      } catch (error) {
        alert("Sesión inválida. Vuelve a iniciar sesión.");
        clearToken();
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    clearToken();
    navigate("/", { replace: true });
  };

  if (!user) {
    return (
      <main style={{ marginTop: "calc(var(--nav-height) + 60px)", display: "flex", justifyContent: "center" }}>
        <Typography>Cargando perfil...</Typography>
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
          Mi Perfil
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography><strong>Nombre:</strong> {user.name}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>

          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              mt: 3,
              borderRadius: "14px",
              fontWeight: 800,
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "#e46b6b" },
            }}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Paper>
    </main>
  );
}