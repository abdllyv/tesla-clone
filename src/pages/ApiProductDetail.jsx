import { useEffect, useState } from "react";
/* --------------------------------- Router --------------------------------- */
import { Link, useParams } from "react-router-dom";

/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import ProductSlider from "./section/ProductSlider";

/* ------------------------------- Components ------------------------------- */
import BlueWhiteBtn from "../components/BlueWhiteBtn";
import axios from "axios";

const ApiProductDetail = () => {
  /* ------------------------------- Loacl State ------------------------------ */
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState({});
  const { productId } = useParams();

  /* ------------------------------- Get Product ------------------------------ */
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_ALL_PRODUCTS}/${productId}`)
          .then((res) => setData(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [productId]);
  return (
    <main>
      <section className="product-detail">
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
                  <button className="btn">-</button>
                  <div className="form-input ">
                    <input type="number" max={2} min={1} defaultValue={1} />
                  </div>
                  <button className="btn">+</button>
                </div>
                <BlueWhiteBtn text={"Add To Cart"} />
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
