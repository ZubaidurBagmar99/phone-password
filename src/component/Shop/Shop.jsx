import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import SectionTitle from '../SectionTitle/SectionTitle';
import { useState } from 'react';


const Shop = () => {
    
  const products = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };
  

  return (
    <div className=" ">
      <button className='btn btn-success' onClick={() => handleCategoryChange(null)}>
          All Products
        </button>
        <button onClick={() => handleCategoryChange('featured_products')}>Featured Products</button>
        <button onClick={() => handleCategoryChange('featured_shops')}>Featured Shop</button>
        <button onClick={() => handleCategoryChange('clothing')}>Clothing</button>
       <SectionTitle heading={`Products${selectedCategory ? ` - ${selectedCategory}` : ''}`} />
      {products ? (
          products
            .filter((product) => !selectedCategory || product.category === selectedCategory)
            .map((product) => (
              <Product key={product.id} product={product} categoryFilter={selectedCategory} />
            ))
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      
    </div>
  );
};

export default Shop;



