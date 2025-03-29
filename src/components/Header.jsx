// src/components/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pecz from "../assets/logo/pecz.jpg";

export const Header = ({ cart, isSearchOpen, setIsSearchOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Perfumes", path: "/perfumes" },
    { name: "Diffusers", path: "/diffusers" },
    { name: "Perfume Oils", path: "/perfume-oils" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Function to close mobile menu - useful for NavLinks
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={pecz} alt="Peczys Cologne Logo" className="h-8 md:h-8 lg:h-10 w-auto" />
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

          {/* Icons and Hamburger --- MODIFIED SECTION --- */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-6">
            {/* Search */}
            <div className="relative">
              {isSearchOpen && (
                 <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 lg:w-72 z-50 bg-gray-900 rounded-lg shadow-xl p-4 border border-gray-700">
                    <div className="flex items-center border-b border-gray-700 pb-2">
                      <i className="fas fa-search text-gray-400 mr-2 sm:mr-3"></i>
                      <input
                        type="text"
                        className="bg-transparent w-full py-1 text-sm text-white focus:outline-none placeholder-gray-500"
                        placeholder="Search products..."
                        // Add state and onChange handler for actual search
                      />
                    </div>
                  </div>
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white"
                aria-label="Toggle search"
              >
                <i className="fas fa-search text-base sm:text-lg lg:text-xl"></i>
              </button>
            </div>

            {/* User */}
            <NavLink to="/login" /* Or "/profile" */ className="text-gray-300 hover:text-white" aria-label="User account">
                 <i className="fas fa-user text-base sm:text-lg lg:text-xl"></i>
            </NavLink>


            {/* --- Cart Icon (Modified) --- */}
            <NavLink
              to="/cart"
              className="relative text-gray-300 hover:text-white"
              aria-label="View shopping cart"
              onClick={closeMobileMenu} // Close mobile menu if open
            >
              <i
                // Dynamically change class based on cart length
                className={`${
                  cart.length > 0 ? 'fas' : 'far' // Use 'fas' (solid) if cart has items, 'far' (regular/outline) if empty
                } fa-shopping-bag text-base sm:text-lg lg:text-xl`}
              ></i>
              {/* Removed the count badge span */}
            </NavLink>
            {/* --- End Cart Icon Modification --- */}


            {/* Hamburger Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-base sm:text-lg`}></i>
            </button>
          </div>
          {/* --- END MODIFIED SECTION --- */}
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-6 absolute top-16 sm:top-20 left-0 w-full z-40">
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
                    onClick={closeMobileMenu} // Close menu on click
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {/* Optional: Add icons like cart/user to mobile dropdown too */}
               {/* <li className="border-t border-gray-700 pt-4 mt-2">
                 <NavLink to="/cart" className="flex items-center text-white hover:text-coral-400" onClick={closeMobileMenu}>
                    <i className={`${cart.length > 0 ? 'fas' : 'far'} fa-shopping-bag w-6 mr-3`}></i> Cart
                 </NavLink>
               </li>
               <li>
                 <NavLink to="/login" className="flex items-center text-white hover:text-coral-400" onClick={closeMobileMenu}>
                    <i className="fas fa-user w-6 mr-3"></i> Account
                 </NavLink>
               </li> */}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;