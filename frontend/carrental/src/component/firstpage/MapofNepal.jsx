// src/component/firstpage/MapOfNepal.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../Slice/CategorySlice'; // Adjust the path according to your project structure
import hm from '../../assets/futurebg.png';

const MapOfNepal = () => {
  const dispatch = useDispatch();

  // Access categories and status from Redux store
  const { data: categories, status, error } = useSelector((state) => state.categories);

  // Fetch categories when the component mounts
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-center"
        style={{
          backgroundImage: `url(${hm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title Section */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-8 text-center">
          <h2 className="text-5xl font-bold text-gray-700 md:text-8xl font-petemoss">Explore Nepal</h2>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 mt-12">
          {/* Show loading or error states */}
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>Error: {error}</p>}

          {/* Show categories if data is available */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories && categories.map((category) => (
              <Link key={category.id} to={`/trails/${category.id}`}> {/* Use category ID to filter products */}
                <div className="relative flex flex-col items-center justify-center w-40 h-40 transition-transform duration-300 ease-in-out bg-white rounded-full shadow-lg hover:scale-110">
                  <img src={category.image} alt={category.name} className="object-cover w-full h-full rounded-full" />
                  <p className="mt-2 text-lg font-bold text-gray-700 md:text-xl">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
