/* --------------------------------- Section -------------------------------- */
import Models from "./section/Models";
import HomeSlider from "./section/HomeSlider";
import ProductSlider from "./section/ProductSlider";

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <ProductSlider title={"Best Seller"}/>
      <Models/>
    </main>
  );
};

export default Home;
