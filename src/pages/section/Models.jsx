/* ---------------------------------- React --------------------------------- */
import { useState } from "react";

/* -------------------------------- DataBase -------------------------------- */
import modelDb from "../../db/modelDb";
import Btn from "../../components/Btn";

const CarModels = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [clothesProduct, setClothesProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [lastProduct, setLastProduct] = useState([]);

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
          <img src={item.productIMg} className="deskop-img" alt={item.title} />
          <img
            src={item.productIMgMobile}
            className="mobile-img"
            alt={item.title}
          />
          <div className="info">
            <h4 className={"title"}>{item.title}</h4>
            <Btn text={"Shop Now"} link={item.url}/>
          </div>
        </div>
      ))}
      <div className="clothes-category">
        {clothesProduct.map((item) => (
          <div className="product-category" key={item.id}>
            <img
              src={item.productIMg}
              className="deskop-img"
              alt={item.title}
            />
            <img
              src={item.productIMgMobile}
              className="mobile-img"
              alt={item.title}
            />
            <div className="info">
              <h4 className={"title"}>{item.title}</h4>
              <Btn text={"Shop Now"} link={item.url}/>
            </div>
          </div>
        ))}
      </div>
      {lastProduct.map((item) => (
        <div className="product-category" key={item.id}>
          <img src={item.productIMg} className="deskop-img" alt={item.title} />
          <img
            src={item.productIMgMobile}
            className="mobile-img"
            alt={item.title}
          />
          <div className="info">
            <h4 className="title">{item.title}</h4>
            <Btn text={"Shop Now"} link={item.url}/>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CarModels;
