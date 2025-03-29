import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// --- Step 2: Import Toaster and toast ---
import { Toaster, toast } from 'react-hot-toast';
// ----------------------------------------
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Perfumes } from "./pages/Perfumes";
import { Diffusers } from "./pages/Diffusers";
import { PerfumeOils } from "./pages/PerfumeOils";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { CartPage } from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.name === product.name); // Use item.id if available
      if (exists) {
        // --- Step 3: Replace alert with toast.error (or .info) ---
        toast.error(`${product.name} is already in your cart!`);
        // --------------------------------------------------------
        return prevCart;
      }

      // --- Step 3: Replace alert with toast.success ---
      toast.success(`${product.name} added to cart!`);
      // -----------------------------------------------

      return [...prevCart, { ...product }];
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">

        {/* --- Step 2: Add the Toaster component --- */}
        {/* You can customize position, styling, etc. here */}
        <Toaster
          position="top-center" // Or 'top-right', 'bottom-center', etc.
          reverseOrder={false} // Show newest toast on top
          toastOptions={{
            // --- Step 4: Customize styling for dark theme ---
            className: '', // Can add global Tailwind classes here
            style: {
              background: '#333', // Dark background
              color: '#fff',      // Light text
              border: '1px solid #555', // Optional border
            },
            success: {
              // Style overrides for success toasts
              style: {
                background: '#28a745', // Green background for success (optional)
              },
              iconTheme: {
                primary: '#fff',    // Icon color
                secondary: '#28a745', // Icon background (match background)
              },
            },
            error: {
               // Style overrides for error toasts
              style: {
                background: '#dc3545', // Red background for error (optional)
              },
               iconTheme: {
                primary: '#fff',
                secondary: '#dc3545',
              },
            },
            // -------------------------------------------------
          }}
        />
        {/* --- End Toaster --- */}

        <Header
          cart={cart}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <main className="flex-grow pt-16 sm:pt-20">
          <Routes>
            {/* Pass addToCart to relevant routes */}
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/perfumes" element={<Perfumes addToCart={addToCart} />} />
            <Route path="/diffusers" element={<Diffusers addToCart={addToCart} />} />
            <Route path="/perfume-oils" element={<PerfumeOils addToCart={addToCart} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} setCart={setCart} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;