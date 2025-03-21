import React, { useState } from "react";

export const PerfumeOils = ({ addToCart }) => {
  // Sample diffuser data (replace with real data if available)
  const diffuserProducts = [
    {
      name: "Lavender Mist Diffuser",
      price: 79.99,
      scent: "lavender",
      image: "https://public.readdy.ai/ai/img_res/13f4a0fd04887897530e870d57066212.jpg",
    },
    {
      name: "Cedar Breeze Diffuser",
      price: 89.99,
      scent: "cedar",
      image: "https://public.readdy.ai/ai/img_res/1a29ebdfe7e85ca42749ecafd0e0da89.jpg",
    },
    {
      name: "Vanilla Glow Diffuser",
      price: 69.99,
      scent: "vanilla",
      image: "https://public.readdy.ai/ai/img_res/afe5eebe00396db2e7f67d236dd268eb.jpg",
    },
    {
      name: "Amber Harmony Diffuser",
      price: 99.99,
      scent: "amber",
      image: "https://public.readdy.ai/ai/img_res/3757e884b2f131230af5fd3a5653789f.jpg",
    },
  ];

  const [selectedScent, setSelectedScent] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter diffusers based on selected scent
  const filteredDiffusers =
    selectedScent === "all"
      ? diffuserProducts
      : diffuserProducts.filter((product) => product.scent === selectedScent);

  // Handle product click to show details
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setIsModalOpen(false);
  };

  // Scent options for filtering
  const scentOptions = [
    { id: "all", name: "All Scents" },
    { id: "lavender", name: "Lavender" },
    { id: "cedar", name: "Cedar" },
    { id: "vanilla", name: "Vanilla" },
    { id: "amber", name: "Amber" },
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Diffusers</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scentOptions.map((scent) => (
            <button
              key={scent.id}
              onClick={() => setSelectedScent(scent.id)}
              className={`px-6 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedScent === scent.id
                  ? "bg-coral-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {scent.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDiffusers.map((product, index) => (
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
              <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
              <p className="text-coral-400">${product.price}</p>
              <p className="text-gray-400 text-sm capitalize">{product.scent}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Product Details */}
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
                <h3 className="text-2xl font-bold mb-4 text-white">{selectedProduct.name}</h3>
                <p className="text-coral-400 text-xl mb-4">${selectedProduct.price}</p>
                <p className="text-gray-400 mb-4">
                  Scent: <span className="capitalize">{selectedProduct.scent}</span>
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

export default PerfumeOils;

