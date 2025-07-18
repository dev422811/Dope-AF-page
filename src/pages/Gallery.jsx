import React from "react";
import { motion } from "framer-motion";
import { Tabs } from "antd";
import Tabulu from "../components/Tabulu";

const Gallery = () => {
  return (
    <div className="bg-white text-[#E9762B] min-h-screen">
      <motion.section
        className="py-12 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 px-20">
        <h2 className="text-4xl font-bold">Gallery</h2>
        <p className="text-lg text-[#E9762B]/80 max-w-xl">
        Explore our collection through a dynamic layout.
        </p>
      </div>

        <Tabulu />
      </motion.section>
    </div>
  );
};

export default Gallery;
