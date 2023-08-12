/* ---------------------------------- React --------------------------------- */
import { useState } from "react";

/* -------------------------------- DataBase -------------------------------- */
import modelDb from "../../db/modelDb";

/* -------------------------------- Component ------------------------------- */
import Btn from "../../components/Btn";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const CarModels = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [clothesProduct, setClothesProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [lastProduct, setLastProduct] = useState([]);

  /* -------------------------------- Language -------------------------------- */
  const { t, i18n } = useTranslation();

  /* ------------------------------- Data FIlter ------------------------------ */
  useState(() => {
    setProduct(modelDb.filter((item) => item.id < 6));
    setClothesProduct(modelDb.filter((item) => item.id > 5 && item.id < 9));
    setLastProduct(modelDb.filter((item) => item.id === 9));
  }, []);

  return (
    <section className="models">
      {product.map((item) => (
        <div className="product-category" key={item.id}>
          <img
            src={item.productIMg}
            className="deskop-img"
            alt={item[`titlE${i18n.language}`]}
          />
          <img
            src={item.productIMgMobile}
            className="mobile-img"
            alt={item[`titlE${i18n.language}`]}
          />
          <div className="info">
            <h4 className={"title"}>{item[`titlE${i18n.language}`]}</h4>
            <Btn text={t("btn.shop-now")} link={item.url} />
          </div>
        </div>
      ))}
      <div className="clothes-category">
        {clothesProduct.map((item) => (
          <div className="product-category" key={item.id}>
            <img
              src={item.productIMg}
              className="deskop-img"
              alt={item[`titlE${i18n.language}`]}
            />
            <img
              src={item.productIMgMobile}
              className="mobile-img"
              alt={item[`titlE${i18n.language}`]}
            />
            <div className="info">
              <h4 className={"title"}>{item[`titlE${i18n.language}`]}</h4>
              <Btn text={t("btn.shop-now")} link={item.url} />
            </div>
          </div>
        ))}
      </div>
      {lastProduct.map((item) => (
        <div className="product-category" key={item.id}>
          <img
            src={item.productIMg}
            className="deskop-img"
            alt={item[`titlE${i18n.language}`]}
          />
          <img
            src={item.productIMgMobile}
            className="mobile-img"
            alt={item[`titlE${i18n.language}`]}
          />
          <div className="info">
            <h4 className="title">{item[`titlE${i18n.language}`]}</h4>
            <Btn text={t("btn.shop-now")} link={item.url} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CarModels;
