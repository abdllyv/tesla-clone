/* --------------------------------- Section -------------------------------- */
import BestSellers from "./section/BestSellers";
import CarModels from "./section/CarModels";
import HomeSlider from "./section/HomeSlider";

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <BestSellers/>
      <CarModels/>
    </main>
  );
};

export default Home;
