/* --------------------------------- Section -------------------------------- */
import BestSellers from "./section/BestSellers";
import Models from "./section/Models";
import HomeSlider from "./section/HomeSlider";

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <BestSellers/>
      <Models/>
    </main>
  );
};

export default Home;
