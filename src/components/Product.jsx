/* ---------------------------------- React --------------------------------- */
import { useContext, useState } from "react";

/* ---------------------------------- Icon ---------------------------------- */
import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";



const Product = ({ data }) => {
  /* ------------------------------- Local State ------------------------------ */
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  /* ------------------------------ Global State ------------------------------ */
  const { cart, setCart,removeData } = useContext(ShopContext);

  const quantities = [1, 2, 3, 4]; // Add more quantities if needed

  const handleQuantitySelect = (quantity) => {
    setSelectedQuantity(quantity);
    setIsOpen(false);
  };


  return (
    <ul className="product-list">
      <li className="product-items">
        <div className="product-image">
          {/* local Db */}
          {data.images && (
            <img src={data.images[0].productImg} alt={data.title} />
          )}
          {/* Api Db */}
          {data.productImage && (
            <img
              src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
              alt={data.title || data.name}
            />
          )}
        </div>
        <div className="product-info">
          <h2 className="title">{data.title || data.name}</h2>
          {data.categoryTitleName && (
            <h3 className="categorTitle">{data.categoryTitleName}</h3>
          )}
          <div className="quantify-group">
            <span className="quantify-text">Quantify:</span>
            <span className="quantify" onClick={() => setIsOpen(true)}>
              {data.quantify} <AiOutlineDown />
              {isOpen && (
                <div className="dropdown">
                  <ul>
                    {quantities.map((quantity) => (
                      <li
                        key={quantity}
                        className={
                          selectedQuantity === quantity ? "active" : ""
                        }
                        onClick={() => handleQuantitySelect(quantity)}
                      >
                        {quantity}
                        {selectedQuantity === quantity && (
                          <div className="check-icon">
                            <AiOutlineCheck />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </span>
          </div>
          <button className="delete-btn" onClick={() => removeData(data.id)}>
            Remove
          </button>
        </div>
        <div className="price">
          <span>{data.price}$</span>
        </div>
      </li>
    </ul>
  );
};

export default Product;
