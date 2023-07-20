/* ---------------------------------- Image --------------------------------- */
import sliderFirstBg from "../../assets/img/home-slider-bg/Wall_Connector_banner_web.avif";
import sliderSecondBg from "../../assets/img/home-slider-bg/Chill_banner_web.avif";
import sliderThirdBg from "../../assets/img/home-slider-bg/MY_Floormats_banner_web.avif";
import sliderFirstBgMobile from "../../assets/img/home-slider-bg/Wall_Connector_banner_mobile.avif";
import sliderSecondBgMobile from "../../assets/img/home-slider-bg/Chill_banner_mobile.avif";
import sliderThirdBgMobile from "../../assets/img/home-slider-bg/MY_Floormats_banner_mobile.avif";

/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

/* -------------------------------- Component ------------------------------- */
import StaticBtn from "../../components/StaticBtn";

const HomeSlider = () => {
  return (
    <section className="home">
      <div className="home-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={-1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sliderFirstBg} className="deskop-img" alt="charging" />
            <img
              src={sliderFirstBgMobile}
              className="mobile-img"
              alt="charging"
            />
            <div className="info">
              <h2 className="title">Wall Connector</h2>
              <div className="text">
                The most convenient way to charge at home
              </div>
              <StaticBtn />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderSecondBg} className="deskop-img" alt="charging" />
            <img
              src={sliderSecondBgMobile}
              className="mobile-img"
              alt="charging"
            />
            <div className="info">
              <h2 className="title">Chill Collection</h2>
              <div className="text">Premium comfort for any season</div>
              <StaticBtn />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderThirdBg} className="deskop-img" alt="charging" />
            <img
              src={sliderThirdBgMobile}
              className="mobile-img"
              alt="charging"
            />
            <div className="info">
              <h2 className="title">Model Y All-Weather Interior Liners</h2>
              <div className="text">For maximum protection and durability</div>
              <StaticBtn />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
