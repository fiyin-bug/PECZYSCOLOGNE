// ProductDetailModal.js
import React, { useState, useEffect } from 'react';

function ProductDetailModal({ isOpen, onClose, product, onAddToCart }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Effects and Handlers (Keep from previous answers) ---
  useEffect(() => { // Reset index
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, product]);

  useEffect(() => { // Handle Escape key
    const handleEscape = (event) => event.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => event.target === event.currentTarget && onClose();
  const handleNext = () => product?.images?.length > 0 && setCurrentIndex(prev => (prev + 1) % product.images.length);
  const handlePrev = () => product?.images?.length > 0 && setCurrentIndex(prev => (prev - 1 + product.images.length) % product.images.length);

  // --- Render Logic ---
  if (!isOpen || !product) return null;

  const images = product.images || [];
  const hasMultipleImages = images.length > 1;
  const currentImageSrc = images[currentIndex] || '/images/placeholder_perfume.jpg'; // Ensure you have a good placeholder

  return (
    // --- Overlay ---
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-6 transition-opacity duration-300 ease-out" // Slightly darker overlay, padding, transition
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* --- Modal Content Box --- */}
      <div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 lg:p-10 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700/50" // Gradient BG, larger padding, rounded-xl, enhanced shadow, subtle border
        onClick={e => e.stopPropagation()}
      >
        {/* --- Close Button (Enhanced) --- */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 bg-gray-900/70 hover:bg-gray-900/90 rounded-full p-2 transition-all duration-200 ease-in-out" // Better visibility, padding, transition
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> {/* Using SVG for X icon */}
        </button>

        {/* --- Modal Body --- */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12"> {/* Increased gap */}

          {/* === Carousel Section === */}
          <div className="w-full md:w-1/2 relative flex-shrink-0">
             {/* Image Container */}
            <div className="aspect-square bg-gray-700/50 rounded-lg overflow-hidden shadow-lg"> {/* Aspect ratio, subtle bg */}
                {images.length > 0 ? (
                    <img
                        src={currentImageSrc}
                        alt={`${product.name} - Image ${currentIndex + 1}`}
                        className="w-full h-full object-cover" // Ensure image covers the area
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 italic">Image not available</div>
                )}
            </div>
             {/* Carousel Navigation (Enhanced) */}
             {hasMultipleImages && (
                <>
                    <button onClick={handlePrev} className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full hover:bg-black/70 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-opacity-50" aria-label="Previous image">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onClick={handleNext} className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full hover:bg-black/70 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-opacity-50" aria-label="Next image">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                 </>
             )}
          </div>

          {/* === Text & Action Section === */}
          <div className="w-full md:w-1/2 flex flex-col">
             {/* Product Title */}
             <h3 id="product-modal-title" className="text-3xl lg:text-4xl font-bold mb-3 text-gray-100 leading-tight"> {/* Larger, bolder, lighter gray, tighter leading */}
                {product.name || 'Product Name'}
             </h3>

             {/* Product Price */}
             <p className="text-2xl lg:text-3xl font-medium text-coral-400 mb-6"> {/* Slightly larger, medium weight, more bottom margin */}
                 {product.price || 'Price unavailable'}
             </p>

             {/* Description Section */}
             <div className="mb-6 text-gray-300 space-y-2 pr-1"> {/* Added space-y, slightly more margin */}
                 <h4 className="text-base font-semibold text-gray-200 uppercase tracking-wider">Description</h4> {/* Uppercase, tracking */}
                 <div className="max-h-32 overflow-y-auto text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"> {/* Max height, scrollbar styling (needs tailwind-scrollbar plugin or custom CSS) */}
                     <p>
                        {product.description || "No description available."}
                     </p>
                 </div>
             </div>

             {/* Fragrance Family */}
             <div className="mb-8"> {/* More bottom margin before button */}
                 <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Fragrance Family</h5>
                 <p className="text-sm capitalize font-medium text-gray-200">
                    {product.family?.join(', ') || 'N/A'}
                 </p>
             </div>

             {/* Add to Cart Button (Enhanced) */}
             <button
                onClick={() => onAddToCart(product)}
                className="mt-auto w-full bg-coral-500 text-white px-8 py-3 text-base font-semibold rounded-lg hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-coral-500 transition-all duration-200 ease-in-out flex items-center justify-center space-x-2 shadow-md hover:shadow-lg" // Larger padding, focus styles, flex for icon, shadow
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> {/* Shopping bag icon */}
                <span>Add to Cart</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailModal;