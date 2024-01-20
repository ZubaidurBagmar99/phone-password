import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Row } from "react-bootstrap";

const Product = ({ product, categoryFilter }) => {
  const { image, name, category, price, product_specification } = product;
  const products = useLoaderData();

  // Check if the category filter is provided and if the product matches the filter
  const shouldDisplay = !categoryFilter || categoryFilter === category;

  return shouldDisplay ? (
    <div className="  ">
      {/* <SectionTitle heading={`Products - ${category}`} /> */}
      <Row xs={1} md={2} lg={6}>
        <div>
          <img style={{ height: "150px", width: "150px" }} src={image} alt="" />
          <div>
            <h3>{name}</h3>
            <p>{category}</p>
            <p>${price}</p>
            {product_specification !== undefined && (
              <p>Specification: {product_specification}</p>
            )}
          </div>
        </div>
      </Row>
    </div>
  ) : null;
};

export default Product;
