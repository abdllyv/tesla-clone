/* ---------------------------------- React --------------------------------- */
import { useEffect, useState } from "react";
/* ------------------------------- Components ------------------------------- */
import ApiCart from "../components/ApiCart";
import Loader from "../components/Loader";

/* ---------------------------------- Axios --------------------------------- */
import axios from "axios";

/* --------------------------------- Router --------------------------------- */
import { useLocation, useNavigate } from "react-router-dom";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const ApiShop = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  /* -------------------------------- Navigate -------------------------------- */
  const navigate = useNavigate();

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

  /* ------------------------------- Get AllData ------------------------------ */
  useEffect(() => {
    const getData = async () => {
      setLoader(true);

      await axios
        .get(process.env.REACT_APP_ALL_PRODUCTS)
        .then((res) => {
          if (res.status === 200) {
            setData(res.data);
            setLoader(false);
          }
        })
        .catch((err) => {
          if (err) {
            setLoader(false);
            navigate("/error");
          }
        });
    };
    getData();
  }, [navigate]);

  /* --------------------------------- Router --------------------------------- */
  const { pathname } = useLocation();

  /* ---------------------- Reset keeping Scroll Position --------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <section className="shop">
        {loader && <Loader />}
        <div className="container">
          <div className="product-category">
            <div className="category-head">
              <h1 className="title">{t("api-shop.product-detail-link")}</h1>
            </div>
            <div className="category-container">
              <h2 className="category-title">{t("api-shop.category-title")}</h2>
              <div className="products">
                {data.map((item) => (
                  <ApiCart product={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApiShop;
