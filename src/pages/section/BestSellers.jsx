/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import bestSellersDb from "../../db/bestSellersDb";
const BestSellers = () => {
  return (
    <section className="best-sellers-slider">
      <div className="container">
        <h3 className="title">Best Sellers</h3>
        <div className="selers-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            navigation={true}
            loop={true}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {bestSellersDb.map((item) => (
              <SwiperSlide key={item.id}>
                <Link className="card">
                  <div className="top">
                    <img src={item.productIMg} alt={item.title} />
                  </div>
                  <h4 className="card-title">{item.title}</h4>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
