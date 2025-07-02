import React from "react";

// Import images from products folder
import img1 from "../products/img1.jpg";
import img2 from "../products/img2.jpg";
import img3 from "../products/img3.jpg";
import img4 from "../products/img4.jpg";
import img5 from "../products/img5.jpg";
import img6 from "../products/img6.jpg";
import img7 from "../products/img7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Masonry = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Product ${index + 1}`}
          className="w-full rounded-lg shadow-md break-inside-avoid"
        />
      ))}
    </div>
  );
};

export default Masonry;
