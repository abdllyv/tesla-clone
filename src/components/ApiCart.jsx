/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const ApiCart = ({ product }) => {
  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

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

          <span className="product-detail-link">
            {t("shopCart.product-detail-link")}
          </span>
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
