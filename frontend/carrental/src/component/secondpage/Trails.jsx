import  { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchBar from '../firstpage/SearchBar';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const Trails = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  // Trail data defined directly in the component
  const trailsData = [
    {
      id: 1,
      name: "Everest Base Camp",
      image: "https://ntnc.org.np/sites/default/files/styles/slider_1920x1024/public/default_images/default-cover_0.jpg?itok=14XRQdhm",
      location: "Solukhumbu, Province 1",
      traveltimeinday: 12,
      traveltimeinnight: 1,
      difficulty: "Medium",
    },
    {
      id: 2,
      name: "Annapurna Circuit",
      image: "https://ntnc.org.np/sites/default/files/styles/slider_1920x1024/public/default_images/default-cover_0.jpg?itok=14XRQdhm",
      location: "Annapurna, Province 4",
      traveltimeinday: 15,
      traveltimeinnight: 2,
      difficulty: "Hard",
    },
    {
      id: 3,
      name: "Langtang Valley",
      image: "https://ntnc.org.np/sites/default/files/styles/slider_1920x1024/public/default_images/default-cover_0.jpg?itok=14XRQdhm",
      location: "Langtang, Province 3",
      traveltimeinday: 10,
      traveltimeinnight: 1,
      difficulty: "Easy",
    },
    // Add more trail data as needed
  ];

  const filteredTrails = selectedLetter
    ? trailsData.filter((trail) => trail.name?.[0].toUpperCase() === selectedLetter)
    : trailsData;

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div>
      <SearchBar />
      <div className="min-h-screen py-10 bg-gray-50">
        <div className="flex flex-col items-center mb-8">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">Trails</h1>
          <div className="flex items-center p-4 mt-4 space-x-2 overflow-x-auto bg-gray-200 rounded-lg shadow-md">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`px-4 py-2 text-xl font-semibold text-gray-700 transition-colors duration-300 bg-gray-300 rounded-full ${
                  selectedLetter === letter ? 'bg-blue-500 text-white' : 'hover:bg-gray-400'
                }`}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {filteredTrails.length === 0 ? (
          <p className="text-center text-gray-600">No trails found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTrails.map((trail, index) => (
              <motion.div
                key={trail.id}
                className="overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:scale-105"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="relative">
                  <img
                    src={trail.image}
                    alt={`Image of the trail ${trail.name}`}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">{trail.name}</h3>
                  <p className="flex items-center mb-3 text-gray-500">
                    <FontAwesomeIcon icon={faLocationPin} className="mr-1 text-green-600" />
                    {trail.location}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-md">
                    <p className="font-semibold text-gray-600">
                      {trail.traveltimeinday} Day & {trail.traveltimeinnight} Night
                    </p>
                    <p className="font-semibold text-red-600">Difficulty Level: {trail.difficulty}</p>
                  </div>
                  <Link
                    to="/practise"
                    className="inline-block px-4 py-2 mt-4 text-white transition-all duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trails;
