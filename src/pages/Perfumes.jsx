import React, { useState } from "react";
import { fragranceFamilies, featuredProducts } from "../data";

export const Perfumes = ({ addToCart }) => {
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    selectedFamily === "all"
      ? featuredProducts
      : featuredProducts.filter((product) => product.family === selectedFamily);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Perfumes</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {fragranceFamilies.map((family) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-black p-3 rounded-full hover:bg-coral-400 transition-colors">
                    <i className="fas fa-shopping-bag"></i>
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-coral-400">{product.price}</p>
              {/* <p className="text-gray-400 text-sm capitalize">{product.family}</p> */}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full md:w-1/2 h-96 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
                <p className="text-coral-400 text-xl mb-4">{selectedProduct.price}</p>
                <p className="text-gray-400 mb-4">
                  Fragrance Family: <span className="capitalize">{selectedProduct.family}</span>
                </p>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="bg-coral-400 text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-coral-500 transition-colors"
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

export default Perfumes;