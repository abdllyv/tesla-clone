import { Route, Routes } from "react-router-dom";
/* -------------------------------- Component ------------------------------- */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ---------------------------------- Page ---------------------------------- */
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import ApiShop from "./pages/ApiShop";
import ApiProductDetail from "./pages/ApiProductDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/shop/:categoryName/:categoryTitleName/:categoryType" element={<Shop/>} />
        <Route path="/api-shop" element={<ApiShop/>} />
        <Route path="/api-product-detail/:productId" element={<ApiProductDetail/>} />
        <Route path="/product-detail/:categoryName/:categoryTitleName/:productId" element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
