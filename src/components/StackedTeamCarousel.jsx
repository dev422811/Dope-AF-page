import React, { useState, useEffect } from "react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: team1, name: "Brand Ambassador" },
  { src: team2, name: "Founders" },
  { src: team3, name: "Creative Head" },
];

const StackedTeamCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Left Button */}
      <button
        onClick={prevImage}
        className="bg-[#E9762B] text-white p-2 rounded-full hover:bg-[#d86522] transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Image with overlay name */}
      <div className="relative w-72 h-72 overflow-hidden rounded-2xl shadow-xl">
        <img
          src={images[current].src}
          alt={images[current].name}
          className="w-full h-full object-cover rounded-2xl transition-all duration-700"
        />
        <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 text-sm font-medium rounded-b-2xl">
          {images[current].name}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="bg-[#E9762B] text-white p-2 rounded-full hover:bg-[#d86522] transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default StackedTeamCarousel;
