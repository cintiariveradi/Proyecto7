import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de login:", form);
  };

  return (
    <main style={{ marginTop: "90px" }}>
      <div
        style={{
          width: "90%",
          maxWidth: "650px",
          margin: "3rem auto",
          background: "#fff",
          padding: "3.5rem",
          borderRadius: "24px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ marginBottom: "1.5rem" }}>Iniciar sesión</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "0.9rem",
              borderRadius: "14px",
              background: "var(--secondary-color-500)",
              color: "white",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
