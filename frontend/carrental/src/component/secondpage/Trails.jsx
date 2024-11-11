import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCategoryItems } from '../Slice/CategoryitemSlice';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../firstpage/SearchBar';

const Trails = () => {
  // Extract the categoryId from the URL using useParams
  const { id: categoryId } = useParams(); // categoryId is now definable and extracted from the URL

  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.categoryItem); // Get data from Redux store
  const [selectedLetter, setSelectedLetter] = useState(''); // State for filtering by letter

  // Fetch category items whenever categoryId changes
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchCategoryItems(categoryId)); // Dispatch the action to fetch category items by categoryId
    }
  }, [dispatch, categoryId]); // Re-fetch whenever categoryId changes

  // Filter items based on the selected letter
  const filteredTrails = selectedLetter
    ? items.filter((trail) => trail.name?.[0].toUpperCase() === selectedLetter)
    : items;

  // Animation for the motion divs
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  // Alphabet for filtering
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div>
      <SearchBar />
      <div className="min-h-screen py-10 bg-gray-50">
        <div className="flex flex-col items-center mb-8">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">
            Trails in Category {categoryId} {/* Display the categoryId dynamically */}
          </h1>

          {/* Alphabet filter buttons */}
          <div className="flex items-center p-4 mt-4 space-x-2 overflow-x-auto bg-gray-200 rounded-lg shadow-md">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className="px-4 py-2 text-xl font-semibold text-gray-700 transition-colors duration-300 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => setSelectedLetter(letter)} // Set selected letter for filtering
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Loading, Error, or Trails display */}
        {status === 'loading' ? (
          <p className="text-center text-gray-600">Loading trails...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error loading trails: {error}</p>
        ) : (
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
                  style={{ transform: 'unset' }} // Apply styles directly here if necessary
                >
                  <div className="relative">
                    <img
                      src={trail.image || 'https://via.placeholder.com/300'} // Use placeholder image if no image is found
                      alt={trail.name}
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">{trail.name}</h3>
                    <p className="flex items-center mb-3 text-gray-500">
                      <FontAwesomeIcon icon={faLocationPin} className="mr-1 text-green-600" />
                      {trail.location || 'Location not available'} {/* Handle missing location */}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-md">
                      <p className="font-semibold text-gray-600">
                        {trail.traveltimeinday} & {trail.traveltimeinnight}
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
