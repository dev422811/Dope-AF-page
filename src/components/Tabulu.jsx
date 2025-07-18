import React from 'react';
import { Tabs } from 'antd';
import { motion } from 'framer-motion';
import '../App.css';

/* ------------------------------------------------------------------
   Dynamically import all images in ../products using Vite's glob.
   Keys look like "../products/bracelet_1.jpeg" → value = URL string.
------------------------------------------------------------------- */
const importedImages = import.meta.glob('../products/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
});

/* Helper: resolve a filename in productGrid to its imported URL */
const getImg = (file) => importedImages[`../products/${file}`] ?? '';

/* Tab change logger */
const onChange = (key) => {
  console.log('Tab changed:', key);
};

/* Product data (filenames only; resolved at render) */
const productGrid = [
  { src: 'bracelet_1.jpeg', name: 'Diamond Ring', price: '₹12,000', instagram: 'https://www.instagram.com/p/DKMq7O2PFmc/?img_index=1' },
  { src: 'bracelet_2.jpeg', name: 'Gold Ring',    price: '₹9,500',  instagram: 'https://www.instagram.com/p/DJo4IZavFV3/' },
  { src: 'bracelet_3.jpeg', name: 'Gold Ring',    price: '₹9,500',  instagram: 'https://www.instagram.com/p/DKMqiwnvDBa/?img_index=1' },
  { src: 'bracelet_4.jpeg', name: 'Gold Ring',    price: '₹9,500',  instagram: 'https://www.instagram.com/p/DKMiKSbvXey/?img_index=1' },
  { src: 'bracelet_5.jpeg', name: 'Gold Ring',    price: '₹9,500',  instagram: 'https://www.instagram.com/p/DJpJBqPvpCX/' },
  { src: 'bracelet_6.jpeg', name: 'Pearl Necklace',   price: '₹25,000', instagram: 'https://www.instagram.com/p/DKMep3nPwtb/?img_index=1' },
  { src: 'bracelet_7.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DJo32M2vQS1/' },
  { src: 'necklace_1.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DJg77tcv2XZ/?img_index=1' },
  { src: 'necklace_2.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DJhMtuFvKOo/?img_index=1' },
  { src: 'necklace_3.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DIEbpspP-tn/?img_index=1' },
  { src: 'necklace_4.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DIEavozPxJI/?img_index=1' },
  { src: 'necklace_5.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DJg77tcv2XZ/?img_index=2' },
  { src: 'necklace_6.jpeg', name: 'Silver Necklace',  price: '₹15,800', instagram: 'https://www.instagram.com/p/DIEcScbv72f/?img_index=1' },
];

/* Product card */
const ProductCard = ({ src, name, price, instagram }) => {
  const imgSrc = getImg(src);
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-4"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={imgSrc}
        alt={name}
        className="rounded-lg w-full h-64 object-cover mb-4"
        loading="lazy"
      />
      <h4 className="text-xl font-semibold text-[#E9762B] mb-1">{name}</h4>
      <p className="text-gray-700 mb-3">{price}</p>
      <div className="flex gap-2 flex-wrap">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn insta"
        >
          View on Instagram
        </a>
        <a
          href="https://wa.me/916301700732?text=Hi%2C%20I%E2%80%99m%20browsing%20your%20website%20and%20would%20like%20to%20place%20an%20order.%20Can%20you%20assist%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn whatsapp"
        >
          Message Us on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

/* Animated grid wrapper */
const ProductGrid = ({ items }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    {items.map((item, i) => (
      <ProductCard key={i} {...item} />
    ))}
  </motion.div>
);

/* Tabs config */
const tabItems = [
  { key: '1', label: 'Bracelets', children: <ProductGrid items={productGrid.slice(0, 7)} /> },
  { key: '2', label: 'Necklaces', children: <ProductGrid items={productGrid.slice(7)} /> },
];

/* Main component */
const Tabulu = () => (
  <div className="pl-4 md:pl-20">
    <Tabs
      defaultActiveKey="1"
      items={tabItems}
      onChange={onChange}
      animated={{ inkBar: true, tabPane: true }}
    />
  </div>
);

export default Tabulu;
