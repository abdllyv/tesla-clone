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
    titlEen: "Wall Connector",
    titlEtr: "Duvar Bağlantısı",
    texten: " The most convenient way to charge at home",
    texttr: " Evde şarj etmenin en uygun yolu",
    url: "/api-product-detail/3",
  },
  {
    id: 2,
    imgDeskop: sliderSecondBg,
    imgMobile: sliderSecondBgMobile,
    titlEen: "Chill Collection",
    titlEtr: "Chill Koleksiyonu",
    texten: " Premium comfort for any season",
    texttr: " Her mevsim için üstün konfor",
    url: "/product-detail/Vehicle Accessories/Model S/4",
  },
  {
    id: 3,
    imgDeskop: sliderThirdBg,
    imgMobile: sliderThirdBgMobile,
    titlEen: "Model Y All-Weather Interior Liners",
    titlEtr: "Model Y Tüm Hava Koşullarına Uygun İç Astarlar",
    texten: " For maximum protection and durability",
    texttr: " Maksimum koruma ve dayanıklılık için",
    url: "/product-detail/Vehicle Accessories/Model S/1",
  },
];
export default sliderDb;
