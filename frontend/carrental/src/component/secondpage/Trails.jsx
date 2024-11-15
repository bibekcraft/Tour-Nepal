import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { fetchItemsByCategory } from '../Slice/ItemSlice';
import SearchBar from '../firstpage/SearchBar';
import MapOfNepal from '../firstpage/MapofNepal';


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
  const dispatch = useDispatch();
  const { items: categoryItems, status, error } = useSelector((state) => state.items);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    dispatch(fetchItemsByCategory(1));
  }, [dispatch]);

  const filteredTrails = selectedLetter
    ? categoryItems.filter((trail) => trail.name?.[0].toUpperCase() === selectedLetter)
    : categoryItems;

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

        {/* Display Loading, Error, or Trails */}
        {status === 'loading' && <p className="text-center text-gray-600">Loading trails...</p>}
        {status === 'failed' && <p className="text-center text-red-600">Error: {error}</p>}
        {status === 'succeeded' && (
          <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTrails.length > 0 ? (
              filteredTrails.map((trail, index) => (
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
                        {trail.traveltimeinday}Day & {trail.traveltimeinnight}Night
                      </p>
                      <p className="font-semibold text-red-600">Difficulty Level: {trail.difficulty}</p>
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
        )}
      </div>
    </div>
  );
};

export default Trails;
