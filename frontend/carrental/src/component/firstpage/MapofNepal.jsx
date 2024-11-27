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
      const response = await fetch('http://127.0.0.1:8000/categories/');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ backgroundImage: `url(${hm})` }}>
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-8 text-center">
          <h2 className="text-5xl font-bold text-gray-700 md:text-8xl font-petemoss">Explore Nepal</h2>
        </div>

        <div className="relative z-10 w-full px-8 mt-12">
          {isLoading ? (
            <div className="text-center">
              <div className="inline-block w-8 h-8 border-4 border-blue-500 rounded-full spinner-border animate-spin"></div>
              <p className="mt-4 text-xl text-gray-700">Loading categories...</p>
            </div>
          ) : error ? (
            <div className="text-center">
              <p className="text-xl text-red-600">{error}</p>
              <button
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
                onClick={() => {
                  setError(null);
                  setIsLoading(true);
                  axios
                    .get('http://127.0.0.1:8000/categories/')
                    .then((response) => {
                      setCategories(response.data);
                      setIsLoading(false);
                    })
                    .catch(() => {
                      setError('Failed to fetch categories. Please try again later.');
                      setIsLoading(false);
                    });
                }}
              >
                Retry
              </button>
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-gray-700">No categories available right now. Check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}/trails`}
                  aria-label={`Explore ${category.name}`}
                >
                  <div className="relative flex flex-col items-center justify-center w-40 h-40 overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                    <img
                      src={category.image || placeholderImage}
                      alt={`Image representing ${category.name || 'Category'}`}
                      loading="lazy"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-lg font-bold text-gray-700 md:text-xl">{category.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
