import { Paper, Typography, Box } from "@mui/material";

export default function Perfil() {
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
        <Typography variant="h4" fontWeight={900} sx={{ color: "primary.main", mb: 2 }}>
          Mi Perfil
        </Typography>

        <Box sx={{ opacity: 0.85 }}>
          <Typography>✅ Ruta creada y protegida.</Typography>
          <Typography sx={{ mt: 1 }}>
            Próximo: mostrar datos del usuario (email) usando verifytoken.
          </Typography>
        </Box>
      </Paper>
    </main>
  );
}