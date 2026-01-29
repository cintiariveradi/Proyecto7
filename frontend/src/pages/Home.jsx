import banner from "../assets/herofinal.png";

export default function Home() {
  return (
    <main style={{ marginTop: "90px" }}>
      <header
    
  id="home"
  style={{
    /* MÁS alto para que cover no recorte tanto */
    minHeight: "calc(100vh - 60px)",   // 60px = tu nav
    height: "clamp(620px, 92vh, 900px)",

    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    /* encuadre hacia abajo: recupera la crema */
  backgroundPosition: "center 85%",



    backgroundColor: "var(--primary-color-900)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",

    /* “tapita” mejor arriba (aire para el texto) */
    paddingTop: "140px",

    width: "100%",
  }}
>

        <h1>5 STEPS ONLY</h1>
        <p>Nutrición para tu piel en 5 pasos</p>
      </header>

      <section id="esencia">
        <h2>Nuestra esencia</h2>
      </section>

      <section id="rutina">
        <h2>Rutina</h2>
      </section>

      <section id="comentarios">
        <h2>Comentarios</h2>
        <div>(lista de comentarios aquí)</div>
        <div>(form para agregar comentario aquí)</div>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <div>(formulario de contacto aquí)</div>
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </main>
  );
}
