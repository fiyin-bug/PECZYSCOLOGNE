import React, { useState } from "react";
// Import all necessary data sources
import {
    fragranceFamilies,
    featuredProducts,        // For the grid
    modalPerfumeProducts     // For the modal details
} from "../data"; // Adjust path if needed

// Import the external modal component - ENSURE PATH AND NAME ARE CORRECT
import ProductDetailModal from "../pages/ProductDetailModel"; // Corrected path/name based on your previous import

// Component name uses PascalCase convention
export const Perfumes = ({ addToCart }) => {
  const [selectedFamily, setSelectedFamily] = useState("all");
  // State to hold the *detailed* data object for the modal
  const [selectedModalData, setSelectedModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter the GRID products using featuredProducts
  const filteredGridProducts =
    selectedFamily === "all"
      ? featuredProducts
      : featuredProducts.filter((product) =>
          product.family?.includes(selectedFamily) // Safe navigation
        );

  // --- Modal Handlers ---
  const handleProductClick = (gridProduct) => {
    // Find the corresponding detailed product data using the ID
    // Ensure gridProduct has an 'id' and it matches an 'id' in modalPerfumeProducts
    if (!gridProduct.id) {
        console.error("Clicked product is missing an ID:", gridProduct);
        return; // Stop if no ID to match
    }
    const detailedData = modalPerfumeProducts.find(
      (modalProd) => modalProd.id === gridProduct.id
    );

    if (detailedData) {
      setSelectedModalData(detailedData); // Store the DETAILED data
      setIsModalOpen(true);
    } else {
      // Log a warning if details aren't found - check IDs in data.js!
      console.warn(`Modal details not found for product ID: ${gridProduct.id}. Check data.js for matching IDs.`);
      // Decide on fallback behavior (e.g., show simple modal or do nothing)
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModalData(null); // Clear detailed data on close
  };

  // This function gets passed to the modal
  const handleAddToCartFromModal = (productDataForCart) => {
    // Pass the relevant product data (might be the detailed one) to the parent handler
    addToCart(productDataForCart);
    handleCloseModal(); // Close modal after action
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Perfumes</h2>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {fragranceFamilies.map((family) => (
            <button
              // Use the unique ID from fragranceFamilies for the key
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

        {/* Product Grid - Uses filteredGridProducts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredGridProducts.length > 0 ? (
            filteredGridProducts.map((product) => ( // product is from featuredProducts
              <div
                // Use the unique ID from featuredProducts for the key - CRITICAL FIX
                key={product.id}
                className="group cursor-pointer bg-gray-850 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                onClick={() => handleProductClick(product)} // Pass the simple grid product
              >
                {/* Card Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={product.image} // Display single image from grid data
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Card Text */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-white truncate">{product.name}</h3>
                  <p className="text-coral-400 mb-2">{product.price}</p>
                  <p className="text-gray-400 text-sm capitalize mt-auto">
                    {product.family?.join(', ') || 'N/A'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">No products found for this family.</p>
          )}
        </div>
      </div>

      {/* Modal Section - Render the external component */}
      {/* Pass the DETAILED data object found via ID to the modal */}
      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedModalData} // This holds the object from modalPerfumeProducts
        onAddToCart={handleAddToCartFromModal}
      />
    </section>
  );
};

// Default export might be needed depending on how you import it elsewhere
export default Perfumes;