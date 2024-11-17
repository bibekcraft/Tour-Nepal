// src/components/MapOfNepal.js
import { useCategoryContext } from "../context/CategoryContext";
import CategoryCard from "./CategoryCard";
import hm from "../../assets/futurebg.png";

const MapOfNepal = () => {
  const { categories, isLoading, error } = useCategoryContext();

  if (isLoading) {
    return <div className="text-xl text-gray-700">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-xl text-red-600">Failed to load categories. Please try again.</div>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ backgroundImage: `url(${hm})` }}>
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-8 text-center">
          <h2 className="text-5xl font-bold text-gray-700 md:text-8xl font-petemoss">Explore Nepal</h2>
        </div>
        <div className="relative z-10 w-full px-8 mt-12">
          {categories.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-gray-700">No categories available right now. Check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapOfNepal;
