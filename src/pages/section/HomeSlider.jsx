/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

/* -------------------------------- Component ------------------------------- */
import Btn from "../../components/Btn";

/* -------------------------------- DataBAse -------------------------------- */
import sliderDb from "../../db/homeSliderDb";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const HomeSlider = () => {
  /* -------------------------------- Language -------------------------------- */
  const { t, i18n } = useTranslation();
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
          {sliderDb.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imgDeskop}
                className="deskop-img"
                alt={item[`titlE${i18n.language}`]}
              />
              <img
                src={item.imgMobile}
                className="mobile-img"
                alt={item[`titlE${i18n.language}`]}
              />
              <div className="info">
                <h2 className="title">{item[`titlE${i18n.language}`]}</h2>
                <p className="text">{item[`text${i18n.language}`]}</p>
                <Btn text={t("btn.shop-now")} link={item.url} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
