import { Link } from 'react-router-dom';
import placeholderImage from '../../assets/boat.jpg';
import hm from '../../assets/futurebg.png';
import { useCategories } from '../hooks/useCategory'; // Importing the useCategories hook

const MapOfNepal = () => {
  const { data: categories, isLoading, error } = useCategories(); // Fetch categories

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
          <p className="text-center text-lg font-semibold text-gray-700">Loading categories...</p>
        ) : error ? (
          <p className="text-center text-lg font-semibold text-red-500">Failed to load categories</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}/trails`} // Dynamic link to category trails
                aria-label={`Explore ${category.name}`}
                className="flex flex-col items-center transition-transform duration-200 ease-in-out transform hover:scale-105"
              >
                <div className="relative w-32 h-32 overflow-hidden bg-white rounded-full shadow-lg">
                  <img
                    src={category.image || placeholderImage} // Display category image if available
                    alt={category.name}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-lg font-semibold text-gray-700">{category.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapOfNepal;
