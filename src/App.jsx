import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Ui/navbar/navbar";
import Hero from "./Ui/hero/hero";
import ProductCard from "./Ui/product/ProductCard";
import ProductDetail from "./pages/ProductDetails/ProductDetails";
import Seller from "./Ui/seller/Seller";
import Footer from "./Ui/footer/footer";
import Login from "./Ui/Login/Login";
import SellerCard from "./Ui/sellerCard/SellerCard";

function Home() {
  return (
    <>
      <Hero />
      <ProductCard />
      <Seller />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

       
        <Route path="/product/:slug" element={<ProductDetail />} />

        <Route path="/seller/:slug" element={<SellerCard />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;