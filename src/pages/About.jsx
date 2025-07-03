import React from "react";
import { motion } from "framer-motion";
import StackedTeamCarousel from "../components/StackedTeamCarousel";

const About = () => {
  const team = [
    { image: "https://via.placeholder.com/400x300", text: "vyshnavi" },
    { image: "https://via.placeholder.com/400x300", text: "Founder 1" },
    { image: "https://via.placeholder.com/400x300", text: "Co-Founder 2" },
    { image: "https://via.placeholder.com/400x300", text: "Operations Head" },
    { image: "https://via.placeholder.com/400x300", text: "Creative Lead" },
    { image: "https://via.placeholder.com/400x300", text: "Brand Strategist" },
  ];

  return (
    <motion.div
      className="bg-white text-[#E9762B] min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="py-12 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-[#E9762B]/80 mb-12">
          Dopeaf is a passionate in-house jewelry brand creating one-of-a-kind pieces
          that tell stories. We believe in quality, elegance, and authenticity.
        </p>

        <div className="flex justify-center">
          <StackedTeamCarousel items={team} />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
