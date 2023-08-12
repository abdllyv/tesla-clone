/* ---------------------------------- React --------------------------------- */
import { useEffect, useState } from "react";

/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* -------------------------------- DataBAse -------------------------------- */
import generalDb from "../../db/generalDb";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const ProductSlider = ({ title }) => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState(null);

  /* -------------------------------- Language -------------------------------- */
  const { i18n } = useTranslation();

  /* --------------------------------- GetData -------------------------------- */
  useEffect(() => {
    const products = generalDb.find((item) => item.category === "MoreOver");
    setData(
      products.items.find(
        (item) => item[`categoryTitlE${i18n.language}`] === title
      )
    );
    
  }, [i18n.language, title]);
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
                <Link
                  className="card"
                  to={`/product-detail/MoreOver/${title}/${item.id}`}
                >
                  <div className="cart-container">
                    <div className="top">
                      <img src={item.images[0].productImg} alt={item[`titlE${i18n.language}`]} />
                    </div>
                    <h4 className="card-title">
                      {item[`titlE${i18n.language}`]}
                    </h4>
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
