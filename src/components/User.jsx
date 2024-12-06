import React, { useState } from 'react';
import image11 from './image1.jpg'; 
import image12 from './image1.jpg';
import image13 from './image1.jpg';
import image14 from './image1.jpg';

import image21 from './image2.jpg'; 
import image22 from './image2.jpg';
import image23 from './image2.jpg';
import image24 from './image2.jpg';

import image31 from './image3.jpg'; 
import image32 from './image3.jpg';
import image33 from './image3.jpg';
import image34 from './image3.jpg';

import image41 from './image1.jpg'; 
import image42 from './image2.jpg';
import image43 from './image1.jpg';
import image44 from './image3.jpg';

const User = () => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('Public Sector');

  // Images based on the selected category
  const images = {
    'Public Sector': [image11, image12, image13, image14],
    'Private Sector': [image21, image22, image23, image24],
    'Research & Academia': [image31, image32, image33, image34],
    'Non-State Actors': [image41, image42, image43, image44],
  };

  return (
    <div className="bg-white py-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center mb-6">OUR MEMBERS</h2>

      {/* Categories as Links */}
      <div className="flex justify-center gap-8 mb-8">
        {Object.keys(images).map((category) => (
          <a
            key={category}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategory(category);
            }}
            className={`text-gray-400 text-lg font-medium ${
              selectedCategory === category
                ? 'text-black underline'
                : 'hover:text-black hover:underline'
            } transition duration-300`}
            style={{
              textDecorationColor: '#20a7db', // Custom underline color
            }}
          >
            {category}
          </a>
        ))}
      </div>

      {/* Images Grid with Flow Animation */}
      <div
        className={`flex flex-wrap justify-center gap-4 transition-all duration-500 transform animate-fadeIn`}
        key={selectedCategory} // Key triggers animation on category change
      >
        {images[selectedCategory].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${selectedCategory} Image ${index + 1}`}
            className="w-[180px] h-[100px] object-cover border border-gray-300 rounded shadow hover:scale-105 transition-transform duration-300 animate-slideIn"
          />
        ))}
      </div>
    </div>
  );
};

export default User;
