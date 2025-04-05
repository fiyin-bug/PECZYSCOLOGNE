// src/pages/PerfumeOils.js
import React, { useState } from "react";
// Make sure data import path is correct for your project structure
import { oilFragranceFamilies, featuredOilProducts } from "../data"; // Assuming you import these

// Use named export for consistency if other pages use it
export const PerfumeOils = ({ addToCart }) => {
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Helper function to format price with Naira sign and commas ---
  const formatPrice = (price) => {
    if (price == null || isNaN(Number(price))) {
      return 'Price not available'; // Handle null, undefined, or non-numeric price
    }
    // Convert to number, ensure 2 decimal places, then add commas
    return `₦${Number(price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
  // --- End Helper Function ---

  const filteredProducts =
    selectedFamily === "all"
      ? featuredOilProducts
      : featuredOilProducts.filter((product) => product.family === selectedFamily);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleQuickAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent the modal from opening
    addToCart(product);
  };

  const handleModalAddToCart = (product) => {
    addToCart(product);
    setIsModalOpen(false); // Close modal after adding
  };

  return (
    <section className="py-20 bg-gray-900 text-white min-h-[calc(100vh-8rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Perfume Oils</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {/* "All" button */}
          <button
             onClick={() => setSelectedFamily("all")}
             className={`px-4 py-2 sm:px-6 text-sm sm:text-base rounded-lg whitespace-nowrap transition-colors duration-200 ${
               selectedFamily === "all"
                 ? "bg-coral-400 text-black font-semibold"
                 : "bg-gray-800 text-white hover:bg-gray-700"
             }`}
          >
             All
           </button>
          {/* Filter Buttons */}
          {oilFragranceFamilies.map((family) => (
            // Ensure family objects have unique 'id' and 'name'
            <button
              key={family.id}
              onClick={() => setSelectedFamily(family.id)}
              className={`px-4 py-2 sm:px-6 text-sm sm:text-base rounded-lg whitespace-nowrap transition-colors duration-200 ${
                selectedFamily === family.id
                  ? "bg-coral-400 text-black font-semibold"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {family.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                // Use product ID if available, otherwise fallback (ensure uniqueness)
                key={product.id || product.name}
                className="group cursor-pointer bg-gray-850 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image Card */}
                <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Quick Add Button Overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => handleQuickAddToCart(e, product)}
                      className="bg-white text-black p-2.5 rounded-full hover:bg-coral-400 transition-colors shadow-lg" // Adjusted padding
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <i className="fas fa-shopping-bag text-sm"></i> {/* Adjusted icon size */}
                    </button>
                  </div>
                </div>
                {/* Product Text Card */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-white truncate">{product.name}</h3>
                  {/* --- Use formatPrice helper for grid price --- */}
                  <p className="text-coral-400 mb-2">{formatPrice(product.price)}</p>
                  <p className="text-gray-400 text-sm capitalize mt-auto">{product.family}</p>
                </div>
              </div>
            ))
          ) : (
             <p className="text-white text-center col-span-full py-8">No perfume oils found for this family.</p> // Added padding
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out" // Added transition
          onClick={() => setIsModalOpen(false)} // Close on overlay click
          role="dialog" aria-modal="true" aria-labelledby="oil-modal-title"
        >
          <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 max-w-3xl w-full relative shadow-2xl border border-gray-700/50 max-h-[90vh] overflow-y-auto" // Enhanced styling, smaller max-width than perfume modal potentially
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 bg-gray-900/70 hover:bg-gray-900/90 rounded-full p-2 transition-all duration-200 ease-in-out"
              aria-label="Close modal"
            >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Modal Image */}
              <div className="w-full md:w-5/12 flex-shrink-0"> {/* Slightly smaller image proportion */}
                 <div className="aspect-w-1 aspect-h-1 bg-gray-700/50 rounded-lg overflow-hidden shadow-lg">
                    <img
                       src={selectedProduct.image}
                       alt={selectedProduct.name}
                       className="w-full h-full object-cover"
                    />
                 </div>
              </div>
              {/* Modal Text Content */}
              <div className="w-full md:w-7/12 flex flex-col text-left">
                 <h3 id="oil-modal-title" className="text-2xl lg:text-3xl font-bold mb-3 text-gray-100 leading-tight">{selectedProduct.name}</h3>
                 {/* --- Use formatPrice helper for modal price --- */}
                 <p className="text-xl lg:text-2xl font-medium text-coral-400 mb-5">{formatPrice(selectedProduct.price)}</p>
                 <p className="text-gray-400 mb-6 text-sm">
                   Fragrance Family: <span className="capitalize font-medium text-gray-200">{selectedProduct.family}</span>
                 </p>
                 {/* --- Add Description if available in data --- */}
                 {selectedProduct.description && (
                    <div className="mb-6 text-gray-300 space-y-1 pr-1">
                         <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Description</h4>
                         <div className="max-h-24 overflow-y-auto text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                             <p>{selectedProduct.description}</p>
                         </div>
                     </div>
                 )}
                 {/* --- Modal Add to Cart Button --- */}
                 <button
                   onClick={() => handleModalAddToCart(selectedProduct)}
                    // Consistent button styling, slightly adjusted from perfume modal if desired
                   className="mt-auto w-full bg-coral-500 text-white px-8 py-3 text-base font-semibold rounded-lg hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-coral-500 transition-all duration-200 ease-in-out flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                   <span>Add to Cart</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PerfumeOils;