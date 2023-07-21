import test1 from "../assets/img/best-sellers-slider/1067348-00-B_0_2000.avif";
import test2 from "../assets/img/best-sellers-slider/1107681-00-A_0_2000.avif";
import test3 from "../assets/img/best-sellers-slider/1448751-00-B_0_2000.avif";
import test4 from "../assets/img/best-sellers-slider/1562262-00-A_10_2000.avif";
import test5 from "../assets/img/best-sellers-slider/1616599-00-A_0_2000.avif";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import ProductSlider from "./section/ProductSlider";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
                  <img src={test1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test5} alt="" />
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
                  <img src={test1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test5} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="product-info">
              <h2 className="product-title">
                Model 3 All-Weather Interior Liners
              </h2>
              <div className="primary-info">
                <span className="price">$225</span>
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
                <button className="add-to-cart-btn">Add To Cart</button>
              </div>
              <div className="secondary-info">
                <h4 className="title">Description</h4>
                <p className="text">
                  Model 3 All-Weather Interior Liners are made from
                  thermoplastic elastomer material for ultimate protection and
                  spatial coverage. Unlike traditional floor mats, liners are
                  comprised of vertical walls that ensure maximum protection to
                  the foot-well carpet and easy cleanup. Exclusive grid pattern
                  crafted by Tesla's Design Studio. 100% recyclable and free of
                  cadmium, lead, latex and PVC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSlider title={"Recommended Products"} />
    </main>
  );
};

export default ProductDetail;
