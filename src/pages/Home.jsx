import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import GradientText from "../components/GradientText";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <motion.div
      className="bg-#A9C46C text-[#a0522d] min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {/* Removed Navbar and Footer */}
      <Header />

      {/* Home title section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Exquisite Handcrafted Jewelry</GradientText>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-[#a0522d]/80">
          Welcome to Dopeaf — your destination for premium, curated jewelry collections.
We specialize in quality designs that combine elegance with a modern edge, crafted for those who demand excellence in every detail. </p>
      </section>

      {/* Hero section */}
      <Hero />
    </motion.div>
  );
};

export default Home;
