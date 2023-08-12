/* ---------------------------------- React --------------------------------- */
import { useEffect } from "react";

/* --------------------------------- Section -------------------------------- */
import Models from "./section/Models";
import HomeSlider from "./section/HomeSlider";
import ProductSlider from "./section/ProductSlider";

/* --------------------------------- Router --------------------------------- */
import { useLocation } from "react-router-dom";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Home = () => {
  /* --------------------------------- Router --------------------------------- */
  const { pathname } = useLocation();

  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();
  
  /* ---------------------- Reset keeping Scroll Position --------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main>
      <HomeSlider />
      <ProductSlider title={t("product-slider.best")} />
      <Models />
    </main>
  );
};

export default Home;
