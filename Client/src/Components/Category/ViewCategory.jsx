import { useCategories } from "../hooks/useCategory";

const ViewCategory = () => {
  const {data:categories,isLoading,isError}=useCategories();
  if (isLoading) {
    return <p className="text-center text-gray-700">Loading categories...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load categories</p>;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories?.map((category) => (

            <div
              key={category.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600 mt-2">
                  Discover amazing places in this category.
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
