import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchCategoryItems } from '../Slice/CategoryitemSlice';
import { Link, useParams } from 'react-router-dom';

const Trails = () => {
  const dispatch = useDispatch();
  const { id: categoryId } = useParams();

  const { items: trails, status, error } = useSelector((state) => state.categoryItem);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchCategoryItems(categoryId));
    }
  }, [dispatch, categoryId]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Trails in Category {categoryId}</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {trails.length > 0 ? (
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
              <div className="overflow-hidden rounded-t-lg">
                <motion.img
                  src={trail.image}
                  alt={trail.name}
                  className="object-cover w-full h-40"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
              </div>
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
          ))
        ) : (
          <p>No trails found.</p>
        )}
      </div>
    </div>
  );
};

export default Trails;
