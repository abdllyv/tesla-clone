/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import generalDb from "../../db/generalDb";

// import required modules

const ProductSlider = ({ title }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const products = generalDb.find((item) => item.category === "MoreOver");
    setData(products.items.find((item) => item.categoryTitle === title));
  }, [title]);

  return (
    <section className="product-slider">
      <div className="container">
        <h3 className="title">{title}</h3>
        <div className="selers-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
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
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data?.products.map((item) => (
              <SwiperSlide key={item.id}>
                <Link className="card" to={`/product-detail/MoreOver/${title}/${item.id}`}>
                  <div className="cart-container">
                    <div className="top">
                      <img src={item.images[0].productImg} alt={item.title} />
                    </div>
                    <h4 className="card-title">{item.title}</h4>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
