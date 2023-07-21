import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/shop" element={<Shop/>} />
        <Route path="/product-detail" element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
