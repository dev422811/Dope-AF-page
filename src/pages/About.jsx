import React from "react";
import { motion } from "framer-motion";
import StackedTeamCarousel from "../components/StackedTeamCarousel";

const About = () => {
  const team = [
    { image: "https://via.placeholder.com/400x300", text: "Vyshnavi – Founder" },
    { image: "https://via.placeholder.com/400x300", text: "Kritika – Co-Founder" },
    { image: "https://via.placeholder.com/400x300", text: "Sara – Operations Head" },
    { image: "https://via.placeholder.com/400x300", text: "Maya – Creative Lead" },
    { image: "https://via.placeholder.com/400x300", text: "Anvi – Brand Strategist" },
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
        className="py-12 px-6 md:px-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg text-[#E9762B]/80 mb-10">
          Dopeaf was born out of a love for bold self-expression and timeless elegance.
          We're a curated in-house jewelry brand committed to creating pieces that
          are meaningful, stylish, and uniquely yours. Our collections blend modern
          design with traditional craftsmanship to help you wear your story.
        </p>

        <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
        <div className="flex justify-center mb-12">
          <StackedTeamCarousel items={team} />
        </div>

        <h2 className="text-3xl font-semibold mb-4">What We Believe</h2>
        <p className="max-w-2xl mx-auto text-md text-[#E9762B]/80">
          Every accessory you wear should feel like it belongs to you—your energy,
          your rhythm, your truth. At Dopeaf, we celebrate individuality and design
          each piece to feel like a statement without shouting. Whether you're dressing up
          or winding down, our jewelry is made to elevate your vibe.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default About;
