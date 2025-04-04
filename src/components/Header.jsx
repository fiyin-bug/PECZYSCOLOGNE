// src/components/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pecz from "../assets/logo/pecz.jpg"; // Verify logo path

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

  // Ensure cart is treated as an array, default to empty if not passed correctly
  const currentCart = Array.isArray(cart) ? cart : [];
  const hasItemsInCart = currentCart.length > 0;

  // Function to close mobile menu
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
                key={item.name} // Ensure item.name is unique or use item.path
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
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-6">
            {/* Search */}
            <div className="relative">
              {/* --- Search Dropdown (Consider extracting to own component) --- */}
              {isSearchOpen && (
                 <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 lg:w-72 z-50 bg-gray-900 rounded-lg shadow-xl p-4 border border-gray-700">
                    <div className="flex items-center border-b border-gray-700 pb-2">
                      {/* Use SVG or ensure Font Awesome is loaded */}
                      <svg className="w-4 h-4 text-gray-400 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                      <input
                        type="text"
                        className="bg-transparent w-full py-1 text-sm text-white focus:outline-none placeholder-gray-500"
                        placeholder="Search products..."
                        // TODO: Add state and onChange handler for search functionality
                      />
                    </div>
                     {/* Optional: Add search results area here */}
                  </div>
              )}
              {/* --- Search Button --- */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white p-1" // Added padding for easier click
                aria-label="Toggle search"
              >
                 {/* Use SVG or ensure Font Awesome is loaded */}
                 <svg className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </button>
            </div>

            {/* User */}
            <NavLink to="/login" /* Or "/profile" */ className="text-gray-300 hover:text-white p-1" aria-label="User account">
                 {/* Use SVG or ensure Font Awesome is loaded */}
                 <svg className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </NavLink>

            {/* Cart Icon */}
            <NavLink
              to="/cart"
              className="relative text-gray-300 hover:text-white p-1" // Added padding
              aria-label="View shopping cart"
              onClick={closeMobileMenu}
            >
              {/* Conditional Icon using Font Awesome Classes */}
              {/* *** इंश्योर फॉन्ट Awesome विथ FAS एंड FAR इज़ लोडेड करेक्टली! *** */}
              <i
                className={`${
                  hasItemsInCart ? 'fas' : 'far' // Use solid style if cart has items, regular if empty
                } fa-shopping-bag text-base sm:text-lg lg:text-xl`}
              ></i>
              {/* Optional: Add a subtle dot indicator if badge is removed */}
              {hasItemsInCart && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-500"></span>
                </span>
              )}
            </NavLink>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-1" // Added padding
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {/* Use SVG or ensure Font Awesome is loaded */}
              {isMenuOpen ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {/* Use transition for smoother open/close */}
        <div
          className={`md:hidden absolute top-16 sm:top-20 left-0 w-full z-40 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen border-t border-gray-800' : 'max-h-0'
          }`}
        >
          <nav className="bg-gray-900 px-4 py-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}> {/* Ensure item.name is unique */}
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
               {/* Example: Adding icons to mobile menu */}
               <li className="border-t border-gray-700 pt-4 mt-2">
                 <NavLink to="/cart" className="flex items-center text-white hover:text-coral-400 py-2" onClick={closeMobileMenu}>
                    <i className={`${hasItemsInCart ? 'fas' : 'far'} fa-shopping-bag w-5 mr-3`}></i> Cart
                 </NavLink>
               </li>
               <li>
                 <NavLink to="/login" className="flex items-center text-white hover:text-coral-400 py-2" onClick={closeMobileMenu}>
                    <i className="fas fa-user w-5 mr-3"></i> Account
                 </NavLink>
               </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// It's generally better practice to export default if it's the main export of the file
// export default Header; // Uncomment if needed