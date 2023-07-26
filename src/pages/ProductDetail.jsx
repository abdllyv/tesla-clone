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

/* -------------------------------- DataBase -------------------------------- */
import generalDb from "../db/generalDb";

/* ------------------------------- Components ------------------------------- */
import BlueWhiteBtn from "../components/BlueWhiteBtn";

const ProductDetail = () => {
  /* ------------------------------- Loacl State ------------------------------ */
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* --------------------------------- Params --------------------------------- */
  const { categoryName, categoryTitleName, productId } = useParams();

  useEffect(() => {
    const getProduct =  () => {
      const foundCategory = generalDb.find(
        (item) => item.category === categoryName
      );
      const foundItem = foundCategory.items.find(
        (item) => item.categoryTitle === categoryTitleName
      );
      const foundProduct = foundItem.products.find(
        (product) => product.id === Number(productId)
      );
      setSelectedProduct({ ...foundProduct, categoryTitleName,quantify:1 });
    };
    getProduct();
  }, [categoryName, categoryTitleName, productId]);

  const handleChange = (e) => {
    const inpValue = e.target.value;
    if (inpValue.trim() === "") {
      return false;
    } else {
      setSelectedProduct({ ...selectedProduct, quantify: Number(inpValue) });
    }
  };

  const incrimentProduct =()=>{
    setSelectedProduct({...selectedProduct,quantify: selectedProduct.quantify +1})
  }

    // decrement produect
    const decrementProduct = () => {
      if (selectedProduct.quantify > 1) {
        setSelectedProduct({
          ...selectedProduct,
          quantify: selectedProduct.quantify - 1,
        });
    
      }
    };
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
                {selectedProduct?.images.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.productImg} alt={selectedProduct?.title} />
                  </SwiperSlide>
                ))}
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
                {selectedProduct?.images.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.productImg} alt={selectedProduct?.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="product-info">
              <h2 className="product-title">{selectedProduct?.title}</h2>
              <div className="primary-info">
                <span className="price">${selectedProduct?.price}</span>
                <p className="login-info">
                  See if this accessory is compatible with a car in your Tesla
                  Account <Link>Sign In</Link>
                </p>
                <h6 className="quantify-title">Quantity</h6>
                <div className="quantify">
                  <button className="btn" onClick={decrementProduct}>-</button>
                  <div className="form-input ">
                    <input
                      type="number"
                      max={2}
                      min={1}
                      // defaultValue={5}
                      value={selectedProduct?.quantify}
                      onChange={()=>handleChange}
                    />
                  </div>
                  <button className="btn" onClick={incrimentProduct}>+</button>
                </div>
                <BlueWhiteBtn text={"Add To Cart"} data={selectedProduct} />
              </div>
              <div className="secondary-info">
                <h4 className="title">Description</h4>
                <p className="text">{selectedProduct?.detail}</p>
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
