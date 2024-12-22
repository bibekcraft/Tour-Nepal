import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import placeholderImage from '../../assets/boat.jpg';
import hm from '../../assets/futurebg.png';

const MapOfNepal = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://127.0.0.1:8000/categories/');
      setCategories(response.data);
    } catch (error) {
      setError('Failed to fetch categories. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${hm})` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 py-16 text-center bg-opacity-90">
        <h2 className="text-5xl font-extrabold text-gray-800 md:text-6xl font-petemoss drop-shadow-lg">
          Explore Nepal
        </h2>
        <p className="mt-4 text-lg text-gray-700 md:text-xl">
          Discover the beauty of Nepal through its unique trails and categories.
        </p>
      </div>

      <div className="relative z-10 w-full px-6 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 rounded-full loader animate-spin"></div>
            <p className="mt-4 text-lg text-gray-600">Loading categories...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-lg text-red-500">{error}</p>
            <button
              className="px-5 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-500"
              onClick={fetchData}
            >
              Retry
            </button>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-700">No categories available right now. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}/trails`}
                aria-label={`Explore ${category.name}`}
                className="flex flex-col items-center transition-transform duration-200 ease-in-out transform hover:scale-105"
              >
                <div className="relative w-32 h-32 overflow-hidden bg-white rounded-full shadow-lg">
                  <img
                    src={category.image || placeholderImage}
                    alt={`Image representing ${category.name || 'Category'}`}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-lg font-semibold text-gray-700">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapOfNepal;
