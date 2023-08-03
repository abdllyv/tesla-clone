import { useContext, useEffect, useState } from "react";
/* --------------------------------- Router --------------------------------- */
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

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

/* ------------------------------- Components ------------------------------- */
import axios from "axios";
import Btn from "../components/Btn";
import Loader from "../components/Loader";

/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";

const ApiProductDetail = () => {
  /* ------------------------------- Loacl State ------------------------------ */
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  /* ------------------------------ Global State ------------------------------ */
  const { addToCart } = useContext(ShopContext);

  /* --------------------------------- Params --------------------------------- */
  const { productId } = useParams();

  /* --------------------------------- Router --------------------------------- */
  const { pathname } = useLocation();

  /* -------------------------------- Navigate -------------------------------- */
  const navigate = useNavigate();

  /* ---------------------- Reset keeping Scroll Position --------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  /* ------------------------------- Get Product ------------------------------ */
  useEffect(() => {
    setLoader(true);
    const getData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_ALL_PRODUCTS}/${productId}`)
          .then((res) => {
            if (res.status === 200) setData({ ...res.data, quantify: 1 });
            setLoader(false);
          });
      } catch (error) {
        navigate("/error");
        setLoader(false);
      }
    };
    getData();
  }, [navigate, productId]);

  /* ----------------------------- React Hook Form ---------------------------- */
  const { register, setValue } = useForm({});

  useEffect(() => {
    setValue("quantify", data.quantify || 1);
  }, [data.quantify, setValue]);

  /* -------------------------- Handle Quantify Change -------------------------- */
  const handleQuantifyChange = (e) => {
    const handleQuantify = e.target.value;
    const regex = /^[0-9]+$/;
    if (!regex.test(handleQuantify)) {
      setError(true);
    } else {
      setData({
        ...data,
        quantify: Number(handleQuantify),
      });
      setError(false);
    }
  };
  /* --------------------------- İncriment Produect --------------------------- */
  const incrimentProduct = () => {
    setData({
      ...data,
      quantify: data.quantify + 1,
    });
  };

  /* --------------------------- Decrement Produect --------------------------- */
  const decrementProduct = () => {
    if (data.quantify > 1) {
      setData({
        ...data,
        quantify: data.quantify - 1,
      });
    }
  };

  return (
    <main>
      <section className="product-detail">
        {loader && <Loader/>}
        <div className="container">
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
                <SwiperSlide>
                  {data.productImage && (
                    <img
                      src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
                      alt={data.name}
                    />
                  )}
                </SwiperSlide>
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
                <SwiperSlide>
                  {data.productImage && (
                    <img
                      src={`${process.env.REACT_APP_IMAGE}${data.productImage}`}
                      alt={data.name}
                    />
                  )}
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="product-info">
              <h2 className="product-title">{data.name}</h2>
              <div className="primary-info">
                <span className="price">${data.price}</span>
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
                      defaultValue={data.quantify}
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
                  onClick={() => addToCart(data)}
                  disabled={error}
                />
              </div>
              <div className="secondary-info">
                <h4 className="title">Description</h4>
                <p className="text">{data.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSlider title={"Recommended Products"} />
    </main>
  );
};

export default ApiProductDetail;
