import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Perfumes } from "./pages/Perfumes";
import { Diffusers } from "./pages/Diffusers";
import { PerfumeOils } from "./pages/PerfumeOils";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { fragranceFamilies, featuredProducts } from "./data";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState("all");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header
          cartCount={cart.length}
          setCartCount={setCart}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addToCart={addToCart}
                  selectedFamily={selectedFamily}
                  setSelectedFamily={setSelectedFamily}
                />
              }
            />
            <Route
              path="/perfumes"
              element={
                <Perfumes
                  addToCart={addToCart}
                  fragranceFamilies={fragranceFamilies}
                  featuredProducts={featuredProducts}
                  selectedFamily={selectedFamily}
                  setSelectedFamily={setSelectedFamily}
                />
              }
            />
            <Route path="/diffusers" element={<Diffusers addToCart={addToCart} />} />
            <Route path="/perfume-oils" element={<PerfumeOils />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;