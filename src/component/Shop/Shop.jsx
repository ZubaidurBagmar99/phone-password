import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Shop = () => {
    
  const products = useLoaderData();

  return (
    <div className=" ">
      {
        products.map(product => 
          <Product key={product.id} product={product}>
            {product.name}
            {product.price}
          </Product>
        )
      }
      
    </div>
  );
};

export default Shop;



