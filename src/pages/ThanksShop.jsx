/* ---------------------------------- React --------------------------------- */
import { useContext, useEffect } from "react";

/* -------------------------------- Component ------------------------------- */
import Btn from "../components/Btn";

/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const ThanksShop = () => {
  /* --------------------------------- Context -------------------------------- */
  const { setCart } = useContext(ShopContext);

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();

  /* ------------------------------- Reset Cart ------------------------------- */
  useEffect(() => {
    setCart([]);
  }, [setCart]);
  return (
    <main>
      <section className="thanks">
        <div className="row">
          <div className="info">
            <h4 className="title">{t("thankShop.title")}</h4>
            <Btn text={t("btn.home-page")} link={"/"} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThanksShop;
