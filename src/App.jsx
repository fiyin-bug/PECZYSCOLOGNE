// App.js
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';
import { fragranceFamilies, heroSlides, categories, featuredProducts } from './data';

const App = () => {
  const [cartCount, setCartCount] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState('all');

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        cartCount={cartCount}
        setCartCount={setCartCount} // Added this
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <HeroSection slides={heroSlides} />
      <CategoriesSection categories={categories} />
      <FeaturedProducts
        products={featuredProducts}
        fragranceFamilies={fragranceFamilies}
        selectedFamily={selectedFamily}
        setSelectedFamily={setSelectedFamily}
      />
      <Footer />
    </div>
  );
};

export default App;