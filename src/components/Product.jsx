/* ---------------------------------- React --------------------------------- */
import { useContext, useState } from "react";

/* ---------------------------------- Icon ---------------------------------- */
import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Product = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [selectedItem, setSelectedItem] = useState(null);

  /* ------------------------------ Gloabl State ------------------------------ */
  const { cart, changeQuantity, removeData } = useContext(ShopContext);

  /* --------------------------- Dropdown open-close -------------------------- */
  const toggleDropdown = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  /* -------------------------------- Language -------------------------------- */
  const { t,i18n } = useTranslation();
  return (
    <ul className="product-list">
      {cart.map((data, index) => (
        <li
          className={`product-items ${selectedItem === index ? "isOpen" : ""}`}
          key={data.id}
        >
          <div className="product-image">
            {data.productImage ? (
              <img
                src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
                alt={data.title || data.name}
              />
            ) : (
              <img src={data.images[0].productImg} alt={data.title} />
            )}
          </div>
          <div className="product-info">
            <h2 className="title">{data.title || data.name || data[`titlE${i18n.language}`] }</h2>
            {data.categoryTitleName && (
              <h3 className="categorTitle">{data.categoryTitleName}</h3>
            )}
            <div className="quantify-group">
              <span className="quantify-text">{t("product.quantify")}:</span>
              <span className="quantify" onClick={() => toggleDropdown(index)}>
                {data.quantify} <AiOutlineDown />
                {selectedItem === index && (
                  <div className="dropdown">
                    <ul>
                      {[...Array(10)].map((_, quantity) => (
                        <li
                          key={quantity + 1}
                          className={
                            data.quantify === quantity + 1 ? "active" : ""
                          }
                          onClick={() =>
                            changeQuantity({ data, quantity: quantity + 1 })
                          }
                        >
                          {quantity + 1}
                          {data.quantify === quantity + 1 && (
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
              {t("btn.remove")}
            </button>
          </div>
          <div className="price">
            <span>{data.price}$</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Product;
