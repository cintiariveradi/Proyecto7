import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Registro from "./pages/Registro.jsx";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/registro" element={<Registro />} />

      </Routes>
    </>
  );
}

export default App;
