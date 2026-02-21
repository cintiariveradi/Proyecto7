import logo from "../assets/faviconCintia.png";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../context/CartContext";
import { getToken, clearToken } from "../auth/token";

export default function Navbar() {
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    clearToken();
    navigate("/", { replace: true });
  };

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
        {!token ? (
          <>
            <Link className="navbar-action" to="/registro">Registro</Link>
            <Link className="navbar-action" to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link className="navbar-action" to="/perfil">Mi perfil</Link>
            <span className="navbar-action" role="button" tabIndex={0} onClick={handleLogout}>
              Cerrar sesión
            </span>
          </>
        )}

        <Link
          className="navbar-action"
          to="/carrito"
          style={{ position: "relative", display: "flex", alignItems: "center" }}
        >
          <ShoppingCartOutlinedIcon />
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-10px",
                background: "var(--secondary-color-500)",
                color: "white",
                fontSize: ".75rem",
                fontWeight: "800",
                width: "20px",
                height: "20px",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}