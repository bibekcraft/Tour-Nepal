// src/component/secondpage/Trails.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchCategoryItems } from '../Slice/CategoryitemSlice'
import { Link } from 'react-router-dom';

const Trails = ({ categoryId }) => {
  const dispatch = useDispatch();

  // Get items, status, and error from Redux store
  const { items: trails, status, error } = useSelector((state) => state.categoryItems);

  // Fetch category items (trails) when component mounts or categoryId changes
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchCategoryItems(categoryId));
    }
  }, [dispatch, categoryId]);

  // Sorting function (if needed)
  const sortTrails = () => {
    // Sorting logic for trails (you can expand this as needed)
  };

  // Motion variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      {/* Show loading or error messages */}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {/* Sort Button */}
      <button
        onClick={sortTrails}
        className="flex items-center px-3 py-1 mb-6 text-sm font-medium text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-600"
      >
        Sort
      </button>

      {/* Header */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Accommodations</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {trails &&
          trails.map((trail, index) => (
            <motion.div
              key={trail.id}
              className="bg-white rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image section */}
              <div className="overflow-hidden rounded-t-lg">
                <motion.img
                  src={trail.image} // Assuming the API provides an image URL
                  alt={trail.name}
                  className="object-cover w-full h-40"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
              </div>

              {/* Details section */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{trail.name}</h3>
                <p className="text-gray-500">{trail.location}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-semibold text-green-600">{trail.price}</p>
                  <p className="text-sm text-gray-400">/ night</p>
                </div>

                <Link
                  to={`/trail/${trail.id}`}
                  className="inline-block px-4 py-2 mt-4 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Trails;
