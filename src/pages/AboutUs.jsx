import React from "react";

export const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Contact Us</h2>
        <div className="max-w-lg mx-auto text-gray-300">
          <p className="mb-6">Have questions? Reach out to us!</p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-coral-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-coral-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

