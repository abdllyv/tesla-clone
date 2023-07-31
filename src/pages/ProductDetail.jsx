import { useContext, useEffect, useState } from "react";
/* --------------------------------- Router --------------------------------- */
import { Link, useLocation, useParams } from "react-router-dom";

/* ----------------------------- React Hook Form && Yup ---------------------------- */
import { useForm } from "react-hook-form";

/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import ProductSlider from "./section/ProductSlider";

/* -------------------------------- DataBase -------------------------------- */
import generalDb from "../db/generalDb";

/* ------------------------------- Components ------------------------------- */
import Btn from "../components/Btn";
/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";

const ProductDetail = () => {
  /* ------------------------------- Loacl State ------------------------------ */
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(false);

  /* --------------------------------- Context -------------------------------- */
  const { addToCart } = useContext(ShopContext);

  /* --------------------------------- Params --------------------------------- */
  const { categoryName, categoryTitleName, productId } = useParams();

  /* --------------------------------- Router --------------------------------- */
  const { pathname } = useLocation();
  /* ---------------------- Reset  Scroll Position --------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* ------------------------------- Get Data Db ------------------------------ */
  useEffect(() => {
    const getProduct = () => {
      const foundCategory = generalDb.find(
        (item) => item.category === categoryName
      );
      const foundItem = foundCategory.items.find(
        (item) => item.categoryTitle === categoryTitleName
      );
      const foundProduct = foundItem.products.find(
        (product) => product.id === Number(productId)
      );
      setSelectedProduct({ ...foundProduct, categoryTitleName, quantify: 1 });
    };
    getProduct();
  }, [categoryName, categoryTitleName, productId]);

  /* ----------------------------- React Hook Form ---------------------------- */
  const { register, setValue } = useForm({});
  useEffect(() => {
    setValue("quantify", selectedProduct?.quantify || 1);
  }, [selectedProduct?.quantify, setValue]);

  /* ------------------------- Handle Change Quantify ------------------------- */
  const handleQuantifyChange = (e) => {
    const handleQuantify = e.target.value;
    const regex = /^[0-9]+$/;
    if (!regex.test(handleQuantify)) {
      setError(true);
    } else {
      setSelectedProduct({
        ...selectedProduct,
        quantify: Number(handleQuantify),
      });
      setError(false);
    }
  };

  /* --------------------------- İncriment Produect --------------------------- */

  const incrimentProduct = () => {
    setSelectedProduct({
      ...selectedProduct,
      quantify: selectedProduct.quantify + 1,
    });
  };

  /* --------------------------- Decrement Produect --------------------------- */
  const decrementProduct = () => {
    if (selectedProduct.quantify > 1) {
      setSelectedProduct({
        ...selectedProduct,
        quantify: selectedProduct.quantify - 1,
      });
    }
  };
  return (
    <main>
      <section className="product-detail">
        <div className="container">
          {selectedProduct && (
            <div className="row">
              <div className="product-images">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className="mySwiper2"
                >
                  {selectedProduct.images.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.productImg} alt={selectedProduct.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={15}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {selectedProduct.images.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.productImg} alt={selectedProduct.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="product-info">
                <h2 className="product-title">{selectedProduct.title}</h2>
                <div className="primary-info">
                  <span className="price">${selectedProduct.price}</span>
                  <p className="login-info">
                    See if this accessory is compatible with a car in your Tesla
                    Account <Link>Sign In</Link>
                  </p>
                  <h6 className="quantify-title">Quantity</h6>
                  <div className="quantify">
                    <button className="btn-quantify" onClick={decrementProduct}>
                      -
                    </button>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="form-input "
                    >
                      <input
                        defaultValue={selectedProduct.quantify}
                        {...register("quantify")}
                        onChange={handleQuantifyChange}
                        minLength={1}
                        maxLength={2}
                      />
                    </form>
                    <button className="btn-quantify" onClick={incrimentProduct}>
                      +
                    </button>
                  </div>
                  <p className={error ? "error  isShown" : "error"}>
                    Only Number
                  </p>
                  <Btn
                    text={"Add To Cart"}
                    link={"#"}
                    onClick={() => addToCart(selectedProduct)}
                    disabled={error}
                  />
                </div>
                <div className="secondary-info">
                  <h4 className="title">Description</h4>
                  <p className="text">{selectedProduct.detail}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <ProductSlider title={"Recommended Products"} />
    </main>
  );
};

export default ProductDetail;
