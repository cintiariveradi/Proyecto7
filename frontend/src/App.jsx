import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Checkout from "./pages/Checkout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Carrito from "./pages/Carrito.jsx";
import RequireAuth from "./auth/RequireAuth";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route
        path="/checkout"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      />
      </Routes>
    </>
  );
}

export default App;
