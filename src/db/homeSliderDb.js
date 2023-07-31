/* ---------------------------------- Image --------------------------------- */
import sliderFirstBg from "../assets/img/home-slider-bg/Wall_Connector_banner_web.avif";
import sliderSecondBg from "../assets/img/home-slider-bg/Chill_banner_web.avif";
import sliderThirdBg from "../assets/img/home-slider-bg/MY_Floormats_banner_web.avif";
import sliderFirstBgMobile from "../assets/img/home-slider-bg/Wall_Connector_banner_mobile.avif";
import sliderSecondBgMobile from "../assets/img/home-slider-bg/Chill_banner_mobile.avif";
import sliderThirdBgMobile from "../assets/img/home-slider-bg/MY_Floormats_banner_mobile.avif";
const sliderDb = [
  {
    id: 1,
    imgDeskop: sliderFirstBg,
    imgMobile: sliderFirstBgMobile,
    title: "Wall Connector",
    text: " The most convenient way to charge at home",
    url: "/api-product-detail/3",
  },
  {
    id: 2,
    imgDeskop: sliderSecondBg,
    imgMobile: sliderSecondBgMobile,
    title: "Chill Collection",
    text: " Premium comfort for any season",
    url: "/product-detail/Vehicle Accessories/Model S/4",
  },
  {
    id: 3,
    imgDeskop: sliderThirdBg,
    imgMobile: sliderThirdBgMobile,
    title: "Model Y All-Weather Interior Liners",
    text: " For maximum protection and durability",
    url: "/product-detail/Vehicle Accessories/Model S/1",
  },
];
export default sliderDb;
