import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Golden Embrace Necklace', image: 'https://via.placeholder.com/300x300', price: '₹3,499' },
  { id: 2, name: 'Twilight Silver Ring', image: 'https://via.placeholder.com/300x300', price: '₹2,199' },
  { id: 3, name: 'Celestial Pearl Earrings', image: 'https://via.placeholder.com/300x300', price: '₹4,799' },
];

const ProductPage = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.price}</p>
            <button onClick={() => setPopup(true)} className="mt-3 w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition">Buy Now</button>
          </div>
        </div>
      ))}

      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Let's get you styled!</h3>
            <p className="mb-3 text-gray-700">Connect with us to place your order:</p>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com" target="_blank" className="text-pink-600 underline">Instagram</a>
              <a href="https://wa.me/1234567890" target="_blank" className="text-green-600 underline">WhatsApp</a>
            </div>
            <button onClick={() => setPopup(false)} className="mt-5 text-red-600 underline">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
