/* --------------------------------- Slider --------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import generalDb from "../../db/generalDb";
const ProductSlider = ({ title }) => {
  const [data, setData] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);

  useEffect(() => {
    generalDb.filter((item) => item.category === "MoreOver" && setData(item));
  }, []);
  useEffect(() => {
    data?.items.map(
      (product) =>
        product.categoryTitle === title && setSelectCategory(product.products)
    );
  }, [data?.items, title]);

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
            {selectCategory?.map((item) => (
              <SwiperSlide key={item.id}>
                <Link className="card" to="/product-detail">
                  <div className="cart-container">
                    <div className="top">
                      <img src={item.productIMg} alt={item.title} />
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
