// components/Footer.js
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">About PECZYS COLOGNE</h3>
            <p className="text-gray-400">
              Discover luxury fragrances crafted by master perfumers. Each scent tells a unique story of elegance and sophistication.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              {['Our Story', 'Collections', 'Store Locator', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Customer Service</h3>
            <ul className="space-y-4 text-gray-400">
              {['Shipping Info', 'Returns', 'FAQ', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none"
              />
              <button className="bg-coral-400 text-black px-6 py-2 rounded-r-lg hover:bg-coral-500 transition-colors whitespace-nowrap !rounded-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 PECZYS COLOGNE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};