import React from "react";
import { HeroSection } from "../components/HeroSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { Perfumes } from "./Perfumes"; // Reuse Perfumes as Featured Products
import { heroSlides, categories, fragranceFamilies, featuredProducts } from "../data";

export const Home = ({ addToCart, selectedFamily, setSelectedFamily }) => {
  return (
    <>
      <HeroSection slides={heroSlides} />
      <CategoriesSection categories={categories} />
      <Perfumes
        addToCart={addToCart}
        fragranceFamilies={fragranceFamilies}
        featuredProducts={featuredProducts}
        selectedFamily={selectedFamily}
        setSelectedFamily={setSelectedFamily}
      />
    </>
  );
};