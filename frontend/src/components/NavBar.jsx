import logo from "../assets/faviconCintia.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      {/* Logo */}
      <Link
        to="/"
        onClick={() => {
          const el = document.getElementById("home");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={logo} alt="Logo 5 Steps Only" width="60" />
      </Link>

      {/* Links centrales */}
      <ul className="navbar-items">
        <li className="navbar-item"><Link to="/#home">Home</Link></li>
        <li className="navbar-item"><Link to="/#esencia">Nuestra esencia</Link></li>
        <li className="navbar-item"><Link to="/#rutina">Rutina</Link></li>
        <li className="navbar-item"><Link to="/products">Productos</Link></li>
        <li className="navbar-item"><Link to="/#comentarios">Comentarios</Link></li>
        <li className="navbar-item"><Link to="/#contacto">Contacto</Link></li>
      </ul>

      {/* Acciones derecha */}
      <div className="navbar-actions">
        <Link className="navbar-action" to="/registro">Registro</Link>
        <span className="navbar-action">Login</span>
        <span className="navbar-action">Carrito</span>
      </div>
    </nav>
  );
}
