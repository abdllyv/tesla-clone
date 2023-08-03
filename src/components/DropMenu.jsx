/* ---------------------------------- React --------------------------------- */
import { useEffect, useState } from "react";

/* ---------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* -------------------------------- DataBAse -------------------------------- */
import dropMobileMenuDb from "../db/dropMobileMenuDb";

/* -------------------------------- Component ------------------------------- */
import Btn from "./Btn";

const DropMenu = ({ dropMenuData }) => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState([]);

  /* -------------------------------- Get Data -------------------------------- */
  useEffect(() => {
    dropMobileMenuDb.map(
      (item) => item.category === dropMenuData && setData([item])
    );
  }, [dropMenuData]);
  return (
    <div className="cart-body">
      {dropMenuData === "Language"
        ? data.map((product) => (
            <ul className="menu-general-info-list" key={product.id}>
              <h4 className="continent">{product.category}</h4>
              {product.items.map((item) => (
                <li className="select-language menu-items" key={item.id}>
                  <h5 className="country">{item.country}</h5>
                  <p className="language">{item.language}</p>
                </li>
              ))}
            </ul>
          ))
        : data.map((product) => (
            <div className="drop-mobile-menu" key={product.id}>
              <h2 className="current-page">{product.category}</h2>
              {product.items.map((item) => (
                <Link className="card" to={item.url} key={item.id}>
                  <div className="top">
                    <img
                      src={item.image}
                      alt={item.categoryTitle}
                      className={
                        product.category === "Vehicle Accessories"
                          ? "image  car-img"
                          : "image"
                      }
                    />
                  </div>
                  <h4 className="title">{item.categoryTitle}</h4>
                </Link>
              ))}
              <div className="btn-primary">
                <Btn text={"View All"} link={product.produstsUrl} />
              </div>
            </div>
          ))}
    </div>
  );
};

export default DropMenu;
