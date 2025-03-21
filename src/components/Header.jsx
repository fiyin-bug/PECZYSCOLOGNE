import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pecz from "../assets/logo/pecz.jpg";
export const Header = ({ cartCount, setCartCount, isSearchOpen, setIsSearchOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Perfumes", path: "/perfumes" },
    { name: "Diffusers", path: "/diffusers" },
    { name: "Perfume Oils", path: "/perfume-oils" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const handleAddToCart = () => {
    setCartCount((prev) => [...prev, { name: "Sample Item", price: 0 }]);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
          <NavLink to="/">
              <img
                src={pecz}
                alt="Peczys Cologne Logo"
                className="h-8 md:h-8 lg:h-10 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop/Tablet Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-base ${
                    isActive ? "text-coral-400 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Icons and Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            {/* Search */}
            <div className="relative">
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 lg:w-72 z-50">
                  <div className="bg-gray-900 rounded-lg shadow-xl p-4">
                    <div className="flex items-center border-b border-gray-700">
                      <i className="fas fa-search text-gray-400 mr-2 sm:mr-3"></i>
                      <input
                        type="text"
                        className="bg-transparent w-full py-2 text-sm text-white focus:outline-none"
                        placeholder="Search products..."
                      />
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white"
              >
                <i className="fas fa-search text-base sm:text-lg lg:text-xl"></i>
              </button>
            </div>

            {/* User */}
            <button className="text-gray-300 hover:text-white">
              <i className="fas fa-user text-base sm:text-lg lg:text-xl"></i>
            </button>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={handleAddToCart}
                className="text-gray-300 hover:text-white"
              >
                <i className="fas fa-shopping-bag text-base sm:text-lg lg:text-xl"></i>
              </button>
              <span className="absolute -top-2 -right-2 bg-coral-400 text-black text-xs rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-base sm:text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-6 absolute top-16 sm:top-20 left-0 w-full z-50">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-white hover:text-coral-400 transition-colors py-2 text-sm sm:text-base ${
                        isActive ? "text-coral-400 font-semibold" : ""
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;