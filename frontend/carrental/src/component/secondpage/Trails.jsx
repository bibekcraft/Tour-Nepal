import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrails } from '../slice/tourismSlice';  // Adjust import if necessary
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
  const dispatch = useDispatch();
  const { categoryId } = useParams();  // Assuming you are passing categoryId as a URL parameter
  const { trails, isLoading, error } = useSelector((state) => state.tourism);  // Get state from Redux

  useEffect(() => {
    // Fetch trails when the component mounts or when categoryId changes
    if (categoryId) {
      dispatch(fetchTrails(categoryId));
    }
  }, [categoryId, dispatch]);

  const filteredTrails = selectedLetter
    ? trails.filter((trail) => trail.name?.[0].toUpperCase() === selectedLetter)
    : trails;

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

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
