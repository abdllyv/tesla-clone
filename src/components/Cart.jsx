import { Link } from "react-router-dom";

const ShopCart = ({ product }) => {
  return (
    <div className="shop-card">
      <div className="card-container">
        <Link  to="/product-detail" className="product-images">
          <img src={product.primaryImg} alt="" className="primary" />
          <img src={product.secondaryImg} alt="" className="secondary" />
          <span className="product-detail-link">View Details</span>
        </Link>
        <div className="info">
          <Link className="card-title" to="/product-detail">{product.title}</Link>
          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
