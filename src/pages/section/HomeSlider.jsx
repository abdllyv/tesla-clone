/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

/* -------------------------------- Component ------------------------------- */
import Btn from "../../components/Btn";
import sliderDb from "../../db/homeSliderDb";
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
          {sliderDb.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imgDeskop}
                className="deskop-img"
                alt={item.title}
              />
              <img
                src={item.imgMobile}
                className="mobile-img"
                alt={item.title}
              />
              <div className="info">
                <h2 className="title">{item.title}</h2>
                <p className="text">{item.text}</p>
                <Btn text={"Shop Now"} link={item.url} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
