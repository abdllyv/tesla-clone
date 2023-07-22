import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopCart = ({ product,category,categoryTitle }) => {
  /* ------------------------------- Local State ------------------------------ */
  const [dataImg, setDataImg] = useState([]);
  useEffect(() => {
    setDataImg(product.images.map((item) => item.productImg));
  }, [product.images]);
  return (
    <div className="shop-card">
      <div className="card-container">
        <Link to={`/product-detail/${category}/${categoryTitle}/${product.id}`} className="product-images">
          <img src={dataImg[0]} alt="" className="primary" />
          <img src={dataImg[1]} alt="" className="secondary" />
          <span className="product-detail-link">View Details</span>
        </Link>
        <div className="info">
          <Link className="card-title" to={`/product-detail/${category}/${categoryTitle}/${product.id}`} >
            {product.title}
          </Link>
          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
