
import { useState } from "react";
import Product from "./Product"; // Assuming the Product component is in a separate file

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        {/* Dropdown or buttons to select category */}
        <button onClick={() => handleCategoryChange(null)}>All Products</button>
        <button onClick={() => handleCategoryChange("featured_shops")}>
          Featured_Shops
        </button>
        <button onClick={() => handleCategoryChange("featured_categories")}>
          Clothing
        </button>
        {/* Add more buttons or a dropdown for other categories */}
      </div>

      <div className="row d-flex col-4">
      {
        products.map((product) => (
            <div key={product.id} className="">
                <Product product={product} categoryFilter={selectedCategory} />
            </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
