// components/Header.js
import React from 'react';

export const Header = ({ cartCount, setCartCount, isSearchOpen, setIsSearchOpen }) => {
  const navItems = ['Home', 'Perfumes', 'Diffusers', 'Perfume Oils', 'About Us', 'Contact Us'];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Example increment
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-coral-400 text-3xl font-bold">PECZYS COLOGNE</a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-6">
            <div className="relative">
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72">
                  <div className="bg-gray-900 rounded-lg shadow-xl p-4">
                    <div className="flex items-center border-b border-gray-700">
                      <i className="fas fa-search text-gray-400 mr-3"></i>
                      <input
                        type="text"
                        className="bg-transparent w-full py-2 text-sm focus:outline-none"
                        placeholder="Search products..."
                      />
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <i className="fas fa-search text-xl"></i>
              </button>
            </div>
            <button className="text-gray-300 hover:text-white cursor-pointer">
              <i className="fas fa-user text-xl"></i>
            </button>
            <div className="relative">
              <button
                onClick={handleAddToCart}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <i className="fas fa-shopping-bag text-xl"></i>
              </button>
              <span className="absolute -top-2 -right-2 bg-coral-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};