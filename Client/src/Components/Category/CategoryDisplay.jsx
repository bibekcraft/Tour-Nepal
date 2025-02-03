import useCategories from "../Category/useCategories";

const CategoryDisplay = () => {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category._id} className="border p-4">
            <h3 className="font-semibold">{category.name}</h3>
            {category.image && <img src={category.image} alt={category.name} className="w-32 h-32 mt-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
