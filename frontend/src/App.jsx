import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Carrito from "./pages/Carrito.jsx";
import RequireAuth from "./auth/RequireAuth";
import Checkout from "./pages/Checkout.jsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";
import CheckoutCancel from "./pages/CheckoutCancel.jsx";
import Perfil from "./pages/Perfil.jsx";



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
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/cancel" element={<CheckoutCancel />} />
        <Route
        path="/checkout"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
          
        }
      />
      <Route path="/perfil" element={
        <RequireAuth>
          <Perfil />
        </RequireAuth>
      } />
      </Routes>
    </>
  );
}

export default App;
