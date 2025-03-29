// src/pages/PerfumeOils.js
import React, { useState } from "react";
// Make sure data import path is correct for your project structure
import { oilFragranceFamilies, featuredOilProducts } from "../data";

// Use named export for consistency if other pages use it
export const PerfumeOils = ({ addToCart }) => {
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    selectedFamily === "all"
      ? featuredOilProducts
      : featuredOilProducts.filter((product) => product.family === selectedFamily); // Assuming family is a string ID/name here

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleQuickAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent the modal from opening when clicking the icon
    addToCart(product);
  };

  const handleModalAddToCart = (product) => {
    addToCart(product);
    setIsModalOpen(false); // Close modal after adding
  };

  return (
    <section className="py-20 bg-gray-900 text-white min-h-[calc(100vh-8rem)]"> {/* Optional: Ensure full page height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Perfume Oils</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Consider adding an "All" button dynamically */}
          <button
             onClick={() => setSelectedFamily("all")}
             className={`px-6 py-2 rounded-lg whitespace-nowrap transition-colors ${
               selectedFamily === "all"
                 ? "bg-coral-400 text-black"
                 : "bg-gray-800 text-white hover:bg-gray-700"
             }`}
          >
             All
           </button>
          {oilFragranceFamilies.map((family) => (
            <button
              key={family.id}
              onClick={() => setSelectedFamily(family.id)}
              className={`px-6 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedFamily === family.id
                  ? "bg-coral-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {family.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Added sm breakpoint */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => ( // Use product ID or unique key if available instead of index
              <div
                key={product.id || product.name} // Use a unique product identifier if possible
                className="group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-w-1 aspect-h-1"> {/* Maintain aspect ratio */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Ensure h-full
                  />
                  {/* Quick Add Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => handleQuickAddToCart(e, product)}
                      className="bg-white text-black p-3 rounded-full hover:bg-coral-400 transition-colors shadow-lg"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <i className="fas fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                {/* Ensure text colors match Perfumes */}
                <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
                {/* Format price assuming it's a number */}
                <p className="text-coral-400"> ₦ {product.price?.toFixed(2)}</p> {/* Use toFixed(2) for currency format, add optional chaining */}
                {/* Display family */}
                <p className="text-gray-400 text-sm capitalize">{product.family}</p>
              </div>
            ))
          ) : (
             <p className="text-white text-center col-span-full">No perfume oils found for this family.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"> {/* Added padding */}
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 max-w-2xl w-full relative shadow-xl"> {/* Added shadow */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white text-xl"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:w-1/2 flex-shrink-0">
                 <img
                   src={selectedProduct.image}
                   alt={selectedProduct.name}
                    // Adjust height or use aspect ratio for consistency
                   className="w-full h-72 md:h-96 object-cover rounded-lg"
                 />
              </div>
              <div className="flex flex-col justify-center text-left"> {/* Align text left */}
                 <h3 className="text-2xl font-bold mb-3 text-white">{selectedProduct.name}</h3>
                 {/* Format price */}
                 <p className="text-coral-400 text-xl mb-4">${selectedProduct.price?.toFixed(2)}</p>
                 <p className="text-gray-400 mb-4">
                   Fragrance Family: <span className="capitalize">{selectedProduct.family}</span>
                 </p>
                 {/* Add Description if available */}
                 {/* {selectedProduct.description && <p className="text-gray-300 mb-6 text-sm">{selectedProduct.description}</p>} */}
                 <button
                   onClick={() => handleModalAddToCart(selectedProduct)}
                   // Consistent button style
                   className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// If using named export above, remove the default export or keep it if you prefer default exports
export default PerfumeOils;
