import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../components/RotatingText";
import land1 from "../products/land1.jpg";
import land2 from "../products/land2.jpg";
import land3 from "../products/land3.jpg";

const Hero = () => {
  const cards = [
    {
      title: "Elegant Design",
      description: "Crafted with care for timeless beauty.",
      image: land1,
    },
    {
      title: "Quality Materials",
      description: "Only the finest stones and metals used.",
      image: land2,
    },
    {
      title: "Custom Orders",
      description: "Tailored just for you.",
      image: land3,
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24 sm:py-28 md:py-32 bg-[#F5ECD5] text-[#E9762B] gap-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rotating Text and Intro */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full text-center md:text-left">
        <motion.h1
          className="text-5xl md:text-6xl font-bold md:w-1/2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent ml-0 md:ml-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <RotatingText
            texts={["Exquisite.", "Elegant.", "Effortless."]}
            splitBy="words"
            mainClassName="text-5xl md:text-6xl font-bold text-black"
            staggerDuration={0.15}
          />
        </motion.h1>

        <motion.p
          className="text-lg text-[#E9762B]/80 max-w-xl md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Discover handcrafted jewelry that speaks to your soul. Designed with passion and curated for timeless style.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-[#E9762B]/10 backdrop-blur-lg border border-[#E9762B]/30 shadow-xl p-4 h-[20rem] flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 text-[#E9762B]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="w-28 h-28 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-[#E9762B]/80">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Order Now Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8"
      >
        <a
          href="https://www.instagram.com/dope_af62/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E9762B] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#d86522] transition-all duration-300"
        >
            Order Now
          </a>
          <p className="mt-4 text-sm text-black/80">
            *Orders are received only through Instagram DMs
          </p>
        </motion.div>
    </motion.section>
  );
};

export default Hero;
