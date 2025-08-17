// src/pages/CartPage.js
import React from "react";
import { NavLink } from "react-router-dom";

// --- DEFINE YOUR WHATSAPP NUMBER HERE ---
const WHATSAPP_NUMBER = "2349151971441"; // Example: Corrected Nigerian format

export const CartPage = ({ cart, setCart }) => {

  // --- HELPER FUNCTION TO PARSE PRICE (Handles numbers and strings) ---
  const parsePrice = (priceValue) => {
    if (typeof priceValue === 'number') {
      // If it's already a number, return it directly
      return priceValue;
    }
    if (typeof priceValue === 'string') {
      // If it's a string, remove non-numeric characters (except decimal point/minus)
      // This removes '₦', '$', ',', etc.
      const numericString = priceValue.replace(/[^0-9.-]+/g, "");
      // Convert the cleaned string to a floating-point number
      const parsed = parseFloat(numericString);
      // Return the parsed number if valid, otherwise return 0
      return isNaN(parsed) ? 0 : parsed;
    }
    // If it's neither a string nor a number (or null/undefined), return 0
    return 0;
  };
  // --- END OF HELPER FUNCTION ---


  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.name !== productToRemove.name));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Use the parsePrice function to get a number, regardless of original type
      const price = parsePrice(item.price);
      return total + price;
    }, 0).toFixed(2); // Keep two decimal places for the final total string
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = "Hi! I'd like to place an order for the following items:\n\n";

    cart.forEach((item, index) => {
      // Parse the price first to get a number
      const price = parsePrice(item.price);
      // Format the parsed number with Naira symbol and commas
      const formattedPrice = `₦${price.toLocaleString()}`; // Use toLocaleString for commas
      message += `${index + 1}. ${item.name} - ${formattedPrice}\n`;
    });

    // Calculate total returns a string like "12345.00", parse it back for formatting
    const totalValue = parseFloat(calculateTotal());
    message += `\nTotal: ₦${totalValue.toLocaleString()}`; // Format total with commas
    message += "\n\nPlease let me know the next steps.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gray-900 text-white min-h-[calc(100vh-8rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center">
            {/* ... empty cart display ... */}
          </div>
        ) : (
          <div>
            {/* Cart Items */}
            <div className="space-y-6 mb-12">
              {cart.map((item, index) => {
                 // Parse the price for display formatting
                 const displayPrice = parsePrice(item.price);
                 return (
                    <div key={item.id || index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          {/* Display formatted parsed price */}
                          {/* Use toLocaleString() for comma separation */}
                          <p className="text-coral-400">
                            {item.price != null ? `₦${displayPrice.toLocaleString()}` : 'N/A'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <i className="fas fa-trash-alt text-lg"></i>
                      </button>
                    </div>
                 );
              })}
            </div>

            {/* Cart Summary & Checkout */}
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                {/* Format the calculated total */}
                <span>₦{parseFloat(calculateTotal()).toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-400">
                <span>Shipping</span>
                <span>Calculated separately</span>
              </div>
              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total (excluding shipping)</span>
                   {/* Format the calculated total */}
                   <span>₦{parseFloat(calculateTotal()).toLocaleString()}</span>
                </div>
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                disabled={cart.length === 0}
              >
                <i className="fab fa-whatsapp text-xl"></i>
                <span>Checkout via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;