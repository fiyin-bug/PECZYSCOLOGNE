// components/FeaturedProducts.js
import React from 'react';

export const FeaturedProducts = ({ products, fragranceFamilies, selectedFamily, setSelectedFamily }) => {
  const filteredProducts = selectedFamily === 'all'
    ? products
    : products.filter(product => product.family === selectedFamily);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {fragranceFamilies.map((family) => (
            <button
              key={family.id}
              onClick={() => setSelectedFamily(family.id)}
              className={`px-6 py-2 !rounded-button whitespace-nowrap transition-colors ${
                selectedFamily === family.id
                  ? 'bg-coral-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {family.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="group cursor-pointer">
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
              <p className="text-coral-400">${product.price}</p>
              <p className="text-gray-400 text-sm capitalize">{product.family}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};