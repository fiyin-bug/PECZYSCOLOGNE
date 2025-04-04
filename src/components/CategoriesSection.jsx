import React from "react";
import { NavLink } from "react-router-dom";

export const CategoriesSection = ({ categories }) => {
  const categoryPaths = {
    Perfumes: "/perfumes",
    Diffusers: "/diffusers",
    "Perfume Oils": "/perfume-oils",
    "Body Sprays": "/body-sprays",
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-left">Explore Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:justify-end">
          {categories.map((category) => (
            <NavLink
              key={category.title}
              to={categoryPaths[category.title] || "#"}
              className="group block bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <span className="text-white font-medium text-lg group-hover:text-coral-400 transition-colors duration-300">
                    {category.title}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;