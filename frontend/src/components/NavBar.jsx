import logo from "../assets/faviconCintia.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      {/* Logo */}
      <Link to="/">
  <img src={logo} alt="Logo 5 Steps Only" width="60" />
</Link>


      {/* Links centrales */}
      <ul className="navbar-items">
  <li className="navbar-item"><a href="#home">Home</a></li>
  <li className="navbar-item"><a href="#esencia">Nuestra esencia</a></li>
  <li className="navbar-item"><a href="#rutina">Rutina</a></li>
  <li className="navbar-item"><a href="/products">Productos</a></li>
  <li className="navbar-item"><a href="#comentarios">Comentarios</a></li>
  <li className="navbar-item"><a href="#contacto">Contacto</a></li>
</ul>



      {/* Iconos derecha */}
      <div>
        <span>Registro</span>
        <span>Login</span>
        <span>Carrito</span>
      </div>
    </nav>
  );
}
