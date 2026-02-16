import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import banner from "../assets/herofinal.png";
import rutinaBanner from "../assets/productoHistoria.png";
import step1Img from "../assets/Limpiador.png";
import step2Img from "../assets/Tonico.png";
import step3Img from "../assets/Serum.png";
import step4Img from "../assets/Crema.png";
import step5Img from "../assets/Bloqueador.png";
import instagramIcon from "../assets/instagram.svg";
import tiktokIcon from "../assets/tiktok.svg";
import whatsappIcon from "../assets/whatsapp.svg";



export default function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
    <main style={{ marginTop: "90px" }}>
      <header
  id="home"
  style={{
    position: "relative",
    width: "100%",
  }}
>
  <img
    src={banner}
    alt="Banner 5 Steps Only"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
  />

  <div
    className="hero-text"
    style={{
      position: "absolute",
      top: "7%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      width: "100%",
    }}
  >
    <h1>5 STEPS ONLY</h1>
    <p>Nutrición para tu piel en 5 pasos</p>
  </div>
</header>


{/* nuestra esencia  */  }

<section id="esencia" style={{ marginTop: "4rem" }}>
  <div
    style={{
      width: "80%",
      margin: "0 auto",
      background: "#fff",
      borderRadius: "24px",
      padding: "2.5rem",
      boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
    }}
  >
    <h2 style={{ fontSize: "2.6rem", color: "var(--secondary-color-500)",  textAlign: "center" }}>
      Nuestra Esencia
    </h2>

    <div
      style={{
        marginTop: "1.5rem",
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "2.5rem",
        alignItems: "start",
      }}
    >
      {/* Columna izquierda */}
      <div style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "var(--intense-text)" }}>
        <p style={{ marginBottom: "1rem" }}>
          Somos una marca de skincare enfocada en la humectación para todo tipo de pieles.
          Creamos una rutina basada en <strong>5 pasos</strong> para que tengas una piel
          saludable, hidratada y luminosa.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          En <strong>5 Steps Only</strong> creemos en rituales simples pero efectivos.
          Cada producto está diseñado para nutrir tu piel y tu momento, con fórmulas limpias
          y una estética que inspira calma.
        </p>

        <p style={{ marginBottom: 0 }}>
          Nos preocupamos de que nuestros productos sean amigables con tu piel y con el planeta:
          envases reciclables, ingredientes seleccionados y fórmulas libres de crueldad animal.
        </p>
        <p style={{ marginBottom: 0 }}>
          Menos decisiones, más constancia. Eso es belleza simple.
        </p>
      </div>

      {/* Columna derecha */}
      <div
        style={{
          background: "var(--primary-color-900)",
          borderRadius: "18px",
          padding: "1.5rem",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "var(--secondary-color-500)" }}>
          Rutina en 5 pasos
        </h3>

        <ol className="lista-diamantes" style={{ margin: 0 }}>
          <li>Limpiar</li>
          <li>Tonificar</li>
          <li>Hidratación ligera</li>
          <li>Hidratación profunda</li>
          <li>Protección solar</li>
        </ol>

        
      </div>
    </div>
  </div>
</section>



{/* rutina*/}

<section id="rutina" className="cards" style={{ marginTop: "4rem" }}>
  <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: "2.8rem", color: "var(--secondary-color-500)" }}>
      Rutina</h2>
    <p style={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: "500" }}>
      Comienza la rutina que cambiará tu piel a su mejor versión
    </p>
  </div>

  {/* PASO 1 */}
  <article className="card">
    <div className="titulo-paso">
    <h2 className="paso-diamond">Primer paso: Limpiar</h2>
    </div>

    <div className="card-body">
      <img className="card-img" src={step1Img} alt="Limpiador en espuma" />
      <p>
        <strong>Limpiador en espuma</strong><br />
        Foam Cleanser es un limpiador en espuma a base de pantenol y ácido glicólico
        que remueve las impurezas del día a día de forma gentil y eficiente.
        No es abrasivo por lo que es apto para pieles sensibles.
      </p>
    </div>
  </article>

  {/* PASO 2 */}
  <article className="card">
    <div className="titulo-paso">
      <h2 className="paso-diamond">Segundo paso: Tonificar</h2>
    </div>

    <div className="card-body">
      <img className="card-img" src={step2Img} alt="Tónico rosado" />
      <p>
        <strong>Tónico</strong><br />
        Toner es un tónico formulado a partir de centella asiática y sal del Himalaya.
        Su propósito es preparar la piel para recibir la hidratación, al mismo tiempo
        nutre, purifica y calma la piel sensible.
      </p>
    </div>
  </article>

  {/* PASO 3 */}
  <article className="card">
    <div className="titulo-paso">
      <h2 className="paso-diamond">Tercer paso: Hidratar e iluminar</h2>
    </div>

    <div className="card-body">
      <img className="card-img" src={step3Img} alt="Glow Serum" />
      <p>
        <strong>Sérum</strong><br />
        Glow Serum es un serum que aporta luminosidad e hidratación. Su formulación
        ligera a base de centella asiática y ácido hialurónico nutre y revitaliza tu piel
        dejando ese efecto "glowy". No es pegajoso ni comedogénico. ¡Lo amamos!
      </p>
    </div>
  </article>

  {/* PASO 4 */}
  <article className="card">
    <div className="titulo-paso">
      <h2 className="paso-diamond">Cuarto paso: Hidratar y sellar</h2>
    </div>

    <div className="card-body">
      <img className="card-img" src={step4Img} alt="Moisturizer" />
      <p>
        <strong>Crema hidratante</strong><br />
        Moisturizer es una crema nutritiva a base de minerales volcánicos y niacinamida.
        Hidrata prolongadamente, ayudando a recuperar la barrera cutánea. No contiene
        fragancias y no es comedogénico. Apto para todo tipo de pieles. Es el último paso
        si reaplicas la rutina en la noche.
      </p>
    </div>
  </article>

  {/* PASO 5 */}
  <article className="card">
    <div className="titulo-paso">
      <h2 className="paso-diamond">Quinto paso: Proteger tu piel</h2>
    </div>

    <div className="card-body">
      <img className="card-img" src={step5Img} alt="Protector solar" />
      <p>
        <strong>Protector solar</strong><br />
        Sunscreen 50+ Este fluido hidratante SPF50+ de absorción inmediata aporta lo que
        tu piel necesita: Ácido hialurónico + Minerales + vitaminas. Protege tu piel del
        fotoenvejecimiento de forma suave pero eficiente.
      </p>
    </div>
  </article>
</section>

<section style={{ width: "100%", marginTop: "4rem" }}>
  <img
    src={rutinaBanner}
    alt="Rutina skincare 5 Steps Only"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "contain",
    }}
  />
</section>


{/* comentarios*/}
<section id="comentarios" className="cards" style={{ marginTop: "4rem" }}>
 <div
  style={{
    width: "80%",
    margin: "0 auto 7rem",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "2.8rem", color: "var(--secondary-color-500)" }}>
    Comentarios de nuestros clientes</h2>
</div>
</section>

<div className="comentarios-grid">
  
  <div className="comentario-texto">
  
    <p>⭐️⭐️⭐️⭐️⭐️</p>
    <p>
      “¡Son realmente increíbles! ¿Qué es esta magia?
      ¡Mi piel mejoró demasiado!”
    </p>
    <span>— Catalina Rodríguez</span>
  </div>

  <div className="comentario-texto">
    <p>⭐️⭐️⭐️⭐️⭐️</p>
    <p>
      “Había visto videos en sus RRSS pero estaba escéptica,
      parecía muy bueno para ser real, pero la verdad me dejó sorprendida.
      Nunca había tenido mi piel tan suave y saludable.
      Definitivamente volveré a comprar otro kit.”
    </p>
    <span>— Marcia Avendaño</span>
  </div>

  <div className="comentario-texto">
    <p>⭐️⭐️⭐️⭐️⭐️</p>
    <p>
      “¡Sus productos son demasiado lindos!
      Y lo mejor de todo es que son 100% efectivos.
      Tengo piel sensible y suelo irritarme,
      pero con estos productos no he tenido molestias.”
    </p>
    <span>— Braulio Cavieres</span>
  </div>
</div>

{/* contacto*/}

      <section id="contacto" style={{ marginTop: "8rem" }}>
  <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: "2.8rem", color: "var(--secondary-color-500)" }}>
      Contacto</h2>
    <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: "1.7" }}>
      ¿Tienes dudas sobre tu rutina o quieres recomendaciones según tu tipo de piel?
      Escríbenos y te respondemos.
    </p>

    <form
      style={{
        maxWidth: "520px",
        margin: "2rem auto 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
        textAlign: "left",
      }}
    >
      <label>
        Nombre
        <input
          type="text"
          placeholder="Tu nombre"
          style={{ width: "100%", marginTop: ".4rem", padding: ".75rem", borderRadius: "10px" }}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          placeholder="tuemail@correo.com"
          style={{ width: "100%", marginTop: ".4rem", padding: ".75rem", borderRadius: "10px" }}
        />
      </label>

      <label>
        Mensaje
        <textarea
          rows="5"
          placeholder="Cuéntanos en qué te podemos ayudar…"
          style={{ width: "100%", marginTop: ".4rem", padding: ".75rem", borderRadius: "10px" }}
        />
      </label>

      <button
        type="button"
        style={{
          marginTop: ".5rem",
          padding: ".85rem 1rem",
          borderRadius: "12px",
          background: "var(--secondary-color-500)",
          color: "white",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Enviar mensaje
      </button>
    </form>
  </div>
</section>


{/* footer */ }

<footer
  id="footer"
  style={{
  marginTop: "6rem",
  background: "linear-gradient(180deg, var(--primary-color-400), #ffd7dc)",
  padding: "4rem 2rem 2rem",
  color: "var(--intense-text)",
  borderTop: "1px solid rgba(159, 78, 78, 0.18)",
  boxShadow: "0 -12px 30px rgba(0,0,0,0.06)",
}}

>
  {/* GRID PRINCIPAL */}
  <div
    style={{
      maxWidth: "1800px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 300px))",
      gap: "9rem",
      alignItems: "start",
    }}
  >
    {/* Col 1 */}
    <div>
      <h3 style={{ color: "var(--secondary-color-500)", marginBottom: "1rem" }}>
        5 Steps Only
      </h3>
      <p style={{ lineHeight: "1.7" }}>
        Skincare simple y efectivo en 5 pasos. Fórmulas limpias, estética calma y
        resultados reales.
      </p>
    </div>

    {/* Col 2 */}
    <div>
      <h3 style={{ color: "var(--secondary-color-500)", marginBottom: "1rem" }}>
        Navegación
      </h3>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li>
          <a href="#esencia" style={{ color: "inherit", textDecoration: "none" }}>
            Nuestra esencia
          </a>
        </li>
        <li>
          <a href="#rutina" style={{ color: "inherit", textDecoration: "none" }}>
            Rutina
          </a>
        </li>
        <li>
          <a href="#comentarios" style={{ color: "inherit", textDecoration: "none" }}>
            Opiniones
          </a>
        </li>
        <li>
          <a href="#contacto" style={{ color: "inherit", textDecoration: "none" }}>
            Contacto
          </a>
        </li>
      </ul>
    </div>

    {/* Col 3 */}
    <div>
      <h3 style={{ color: "var(--secondary-color-500)", marginBottom: "1rem" }}>
        Newsletter
      </h3>
      <p style={{ lineHeight: "1.7" }}>Suscríbete para recibir tips y promos.</p>

      <form style={{ display: "flex", gap: ".6rem", marginTop: "1rem" }}>
        <input
          type="email"
          placeholder="tuemail@correo.com"
          style={{
            flex: 1,
            padding: ".7rem",
            borderRadius: "10px",
          }}
        />
        <button
          type="button"
          style={{
            padding: ".7rem 1rem",
            borderRadius: "10px",
            background: "var(--secondary-color-500)",
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          OK
        </button>
      </form>
    </div>

    {/* Col 4 */}
    <div>
      <h3 style={{ color: "var(--secondary-color-500)", marginBottom: "1rem" }}>
        Síguenos
      </h3>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <img
          src={instagramIcon}
          alt="Instagram"
          style={{ width: "28px", cursor: "pointer" }}
        />
        <img
          src={tiktokIcon}
          alt="TikTok"
          style={{ width: "28px", cursor: "pointer" }}
        />
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          style={{ width: "28px", cursor: "pointer" }}
        />
      </div>
    </div>
  </div>

  {/* DERECHOS RESERVADOS */}
  <div
    style={{
      marginTop: "2rem",
      paddingTop: "1rem",
      borderTop: "1px solid rgba(0,0,0,0.08)",
      textAlign: "center",
      fontSize: ".9rem",
    }}
  >
    © {new Date().getFullYear()} 5 Steps Only. Todos los derechos reservados.
  </div>
</footer>
    </main>
  );
}

