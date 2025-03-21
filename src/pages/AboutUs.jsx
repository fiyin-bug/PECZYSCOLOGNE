import React from "react";
import { motion } from "framer-motion";

export const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,  // Slower animation for the entire container
        staggerChildren: 0.4,  // More time for each child animation to appear
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,  // Slower, softer bounce effect
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen text-white flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First Text Section */}
        <motion.h1
          className="text-4xl font-extrabold text-[#c5ac5a] mb-8"
          variants={textVariants}
        >
          Welcome to Peczyscologne, where every fragrance tells a story!
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-12"
          variants={textVariants}
        >
          Experience the art of captivating and unique oil-based cologne that reflects
          individuality and style with every spritz. Each scent is carefully crafted to
          evoke emotions and memories, making every bottle more than just fragrance—it’s
          an experience.
        </motion.p>

        {/* Second Text Section */}
        <motion.h2
          className="text-3xl font-semibold text-[#c5ac5a] mb-6"
          variants={textVariants}
        >
          Join us on this aromatic journey!
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300"
          variants={textVariants}
        >
          Discover the perfect scent that resonates with you. Our collection is designed to
          help you find a fragrance that suits your unique personality, enhancing your daily
          moments with an unforgettable essence. Whether you're seeking a signature scent or
          something new, we’re here to help you find the perfect match.
        </motion.p>
      </motion.div>

      {/* Footer */}
      <motion.div className="mt-12 text-center" variants={textVariants}>
        <p className="text-gray-400">Let's make every moment unforgettable with Peczyscologne!</p>
      </motion.div>
    </div>
  );
};

export default AboutUs;



