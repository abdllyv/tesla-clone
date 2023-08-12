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
import CartProducts from "./pages/CartProducts";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ThanksShop from "./pages/ThanksShop";
import Profile from "./pages/Profile";
import OtpConfirm from "./pages/OtpConfirm";
import ResetPassword from "./pages/ResetPassword";

/* ---------------------------- Router Protector ---------------------------- */
import PrivateRoutes from "./router/PrivateRouter";
/* --------------------------------- Context -------------------------------- */
import { MainContext } from "./utils/ShopContext";
import { Validation } from "./utils/Auth";
const App = () => {
  return (
    <Validation>
      <MainContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop/:categoryName/:categoryTitleName/:categoryType?"
            element={<Shop />}
          />
          <Route path="/api-shop" element={<ApiShop />} />
          <Route path="/cart-products" element={<CartProducts />} />
          <Route
            path="/api-product-detail/:productId"
            element={<ApiProductDetail />}
          />
          <Route
            path="/product-detail/:categoryName/:categoryTitleName/:productId"
            element={<ProductDetail />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
          <Route path="/otp" element={<OtpConfirm/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/profile" element={<Profile/>}  />
            <Route path="/thanks" element={<ThanksShop />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MainContext>
    </Validation>
  );
};

export default App;
