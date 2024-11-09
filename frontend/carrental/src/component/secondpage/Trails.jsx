import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../firstpage/SearchBar';
import React, { useState } from 'react';

const Trails = () => {
  const { id: categoryId } = useParams();
  
  // Sample static trail data
  const trails = [
    {
      id: 1,
      name: 'Everest Base Camp Trek Nepal',
      location: 'Nepal',
      duration: '15 Days 14 Nights',
      price: '$1500',
      image: 'https://images.squarespace-cdn.com/content/v1/5bca3e6651f4d483d03bf7bb/1681303217814-9ELR0MKOZQ4RAV7MIPK7/339301770_551223380413064_460702527936804982_n.jpg?format=2500w',
    },
    {
      id: 2,
      name: 'Ghorepani Poonhill Trek',
      location: 'Nepal',
      duration: '09 Days 08 Nights',
      price: '$675',
      image: 'https://summittreks.com/wp-content/uploads/2023/11/Ghorepani-Poon-Hill.jpg',
    },
    {
      id: 3,
      name: 'Rapid Annapurna Base Camp Trek',
      location: 'Nepal',
      duration: '11 Days 10 Nights',
      price: '$800',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWi7qx-NMsycpSpSIBK8BKZ2i9krOtgTDacg&s',
    },
    {
      id: 4,
      name: 'Rapid Annapurna Base Camp Trek',
      location: 'Nepal',
      duration: '11 Days 10 Nights',
      price: '$800',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWi7qx-NMsycpSpSIBK8BKZ2i9krOtgTDacg&s',
    },
    // Add more trail data as needed
  ];

  const [selectedLetter, setSelectedLetter] = useState('');

  const filteredTrails = selectedLetter
    ? trails.filter((trail) => trail.name[0].toUpperCase() === selectedLetter)
    : trails;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  // Generate alphabet letters A-Z
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div>
      <SearchBar />
      <div className="min-h-screen py-10 bg-gray-50">
        <div className="flex flex-col items-center mb-8">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">Trails in Category {categoryId}</h1>
          
          {/* Alphabet filter buttons */}
          <div className="flex items-center p-4 mt-4 space-x-2 overflow-x-auto bg-gray-200 rounded-lg shadow-md">
  {alphabet.map((letter) => (
    <button
      key={letter}
      className="px-4 py-2 text-xl font-semibold text-gray-700 transition-colors duration-300 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      onClick={() => setSelectedLetter(letter)} // Set the selected letter
    >
      {letter}
    </button>
  ))}
</div>

        </div>

        {/* Trails list */}
        <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTrails.length > 0 ? (
            filteredTrails.map((trail, index) => (
              <motion.div
                key={trail.id}
                className="overflow-hidden transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:scale-105"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="relative">
                  <img
                    src={trail.image}
                    alt={trail.name}
                    className="object-cover w-full h-48 rounded-t-lg"
                    onError={(e) => { e.target.src = 'https://example.com/fallback-image.png'; }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">{trail.name}</h3>
                  <p className="flex items-center mb-3 text-gray-500">
                    <FontAwesomeIcon icon={faLocationPin} className="mr-1 text-green-600" /> {trail.location}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-md">
                    <p className="font-semibold text-gray-600">{trail.duration}</p>
                    <p className="font-semibold text-red-600">Price from {trail.price}</p>
                  </div>
                  <Link
                    to={`/trail/${trail.id}`}
                    className="inline-block px-4 py-2 mt-4 text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600">No trails found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trails;
