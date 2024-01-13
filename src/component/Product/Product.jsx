import React from 'react';

const Product = ({ product, categoryFilter }) => {
  const { image, name, category, price, product_specification } = product;

  // Check if the category filter is provided and if the product matches the filter
  const shouldDisplay = !categoryFilter || categoryFilter === category;

  return shouldDisplay ? (
    <div className=' '>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <p>${price}</p>
        {product_specification !== undefined && (
          <p>Specification: {product_specification}</p>
        )}
      </div>
    </div>
  ) : null;
};

export default Product;
