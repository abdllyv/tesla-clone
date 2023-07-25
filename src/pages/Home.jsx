/* ---------------------------------- React --------------------------------- */
import { useEffect } from "react";

/* --------------------------------- Section -------------------------------- */
import Models from "./section/Models";
import HomeSlider from "./section/HomeSlider";
import ProductSlider from "./section/ProductSlider";

/* --------------------------------- Router --------------------------------- */
import { useLocation } from "react-router-dom";

const Home = () => {
  /* --------------------------------- Router --------------------------------- */
  const { pathname } = useLocation();
  /* ---------------------- Reset keeping Scroll Position --------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main>
      <HomeSlider />
      <ProductSlider title={"Best Seller"}/>
      <Models/>
    </main>
  );
};

export default Home;
