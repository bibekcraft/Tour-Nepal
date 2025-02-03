import useCategories from "../Category/useCategories";

const CategoryList = () => {
  const { categories, isLoading, addCategoryMutation, updateCategoryMutation, deleteCategoryMutation } = useCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => deleteCategoryMutation.mutate(category.id)}>Delete</button>
            <button onClick={() => updateCategoryMutation.mutate({ id: category.id, name: "New Name", image: "new-image.jpg" })}>Update</button>
          </li>
        ))}
      </ul>

      <button onClick={() => addCategoryMutation.mutate({ name: "New Category", image: "new-category.jpg" })}>
        Add Category
      </button>
    </div>
  );
};

export default CategoryList;
