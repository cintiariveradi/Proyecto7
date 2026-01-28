import logo from "../assets/faviconCintia.png";

export default function Navbar() {
  return (
    <nav>
      {/* Logo */}
      <img src={logo} alt="Logo 5 Steps Only" width="60" />

      {/* Links centrales */}
      <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#esencia">Nuestra esencia</a></li>
  <li><a href="#rutina">Rutina</a></li>
  <li><a href="#productos">Productos</a></li>
  <li><a href="#comentarios">Comentarios</a></li>
  <li><a href="#contacto">Contacto</a></li>
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
