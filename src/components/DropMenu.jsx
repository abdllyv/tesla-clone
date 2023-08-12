/* ---------------------------------- React --------------------------------- */
import { useEffect, useState } from "react";

/* ---------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* -------------------------------- DataBAse -------------------------------- */
import dropMobileMenuDb from "../db/dropMobileMenuDb";

/* -------------------------------- Component ------------------------------- */
import Btn from "./Btn";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const DropMenu = ({ dropMenuData }) => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState([]);
  
  /* --------------------------------Change Language -------------------------------- */
  const {t,  i18n } = useTranslation();
  const selectLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  /* -------------------------------- Get Data -------------------------------- */
  useEffect(() => {
    dropMobileMenuDb.map(
      (item) => item[`categorY${i18n.language}`] === dropMenuData && setData([item])
    );
  }, [dropMenuData, i18n.language]);
  return (
    <div className="cart-body">
      {dropMenuData === t("header.lng")
        ? data.map((product) => (
            <ul className="menu-general-info-list" key={product.id}>
              <h4 className="continent">{product[`categorY${i18n.language}`]}</h4>
              {product.items.map((item) => (
                <li
                  className="select-language menu-items"
                  key={item.id}
                  onClick={()=>selectLanguage(item.lng)}
                >
                  <h5 className="country">{item.country}</h5>
                  <p className="language">{item.language}</p>
                </li>
              ))}
            </ul>
          ))
        : data.map((product) => (
            <div className="drop-mobile-menu" key={product.id}>
              <h2 className="current-page">{product[`categorY${i18n.language}`]}</h2>
              {product.items.map((item) => (
                <Link className="card" to={item.url} key={item.id}>
                  <div className="top">
                    <img
                      src={item.image}
                      alt={item.categoryTitle}
                      className={
                        product[`categorY${i18n.language}`] === "Vehicle Accessories"
                          ? "image  car-img"
                          : "image"
                      }
                    />
                  </div>
                  <h4 className="title">{item[`categoryTitlE${i18n.language}`]}</h4>
                </Link>
              ))}
              <div className="btn-primary">
                <Btn text={t("btn.view-all")} link={product.produstsUrl} />
              </div>
            </div>
          ))}
    </div>
  );
};

export default DropMenu;
