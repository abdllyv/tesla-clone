/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

const ApiCart = ({ product }) => {
  return (
    <div className="shop-card">
      <div className="card-container">
        <Link
          className="product-images"
          to={`/api-product-detail/${product.id}`}
        >
          {product.productImage && (
            <img
              src={`${process.env.REACT_APP_IMAGE}${product.productImage}`}
              className="primary"
              alt={product.name}
            />
          )}

          <span className="product-detail-link">View Details</span>
        </Link>
        <div className="info">
          <Link className="card-title" to={`/api-product-detail/${product.id}`}>
            {product.name}
          </Link>
          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ApiCart;
