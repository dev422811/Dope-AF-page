import React from "react";
import { motion } from "framer-motion";
import Masonry from "../components/Masonry";

const Gallery = () => {
  return (
    <div className="bg-white text-[#E9762B] min-h-screen">
      <motion.section
        className="py-12 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Gallery</h2>
        <p className="max-w-xl mx-auto text-lg text-[#E9762B]/80 mb-10">
          Explore our collection through a dynamic masonry layout.
        </p>
        <Masonry />
      </motion.section>
    </div>
  );
};

export default Gallery;
