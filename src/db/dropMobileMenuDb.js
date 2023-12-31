/* ------------------------ Vehicle Accessories Images ----------------------- */
import modelS from "../assets/img/vehicle-accessories/Model_S.avif";
import model3 from "../assets/img/vehicle-accessories/Model_3.avif";
import modelX from "../assets/img/vehicle-accessories/Model_x.avif";
import modelY from "../assets/img/vehicle-accessories/Model_y.avif";
/* ----------------------------- Charging Images ---------------------------- */
import charging from "../assets/img/charging/FeaturedNavMPOS_1457768-02-G.avif";
import onTheRoad from "../assets/img/charging/FeaturedNavMPOS_1512830-00-A.avif";
import parts from "../assets/img/charging/FeaturedNavMPOS_1551813-00-A.avif";
/* ----------------------------- Apparel Images ----------------------------- */
import men from "../assets/img/apparel/mobile_nav_mens.avif";
import women from "../assets/img/apparel/mobile_nav_womens_chill2.avif";
import kids from "../assets/img/apparel/mobile_nav_kids_cyber.avif";
/* ---------------------------- LifeStyle Images ---------------------------- */
import bestSellers from "../assets/img/lifestyle/1715672-00-A_featured.avif";
import bags from "../assets/img/lifestyle/1859926-00-A_flyout_01.avif";
import drinkWare from "../assets/img/lifestyle/sipping-glass-flyout.avif";
import miniteslas from "../assets/img/lifestyle/FeaturedNavMPOS_1524001-00-A.avif";
import outDoor from "../assets/img/lifestyle/FeaturedNav_w_charger.avif";
import giftCart from "../assets/img/lifestyle/Tesla_giftcard.avif";
const dropMobileMenuDb = [
  {
    id: 1,
    categorYen: "Charging",
    categorYtr: "Şarj etme",
    produstsUrl: "/api-shop",
    items: [
      {
        id: 1,
        categoryTitlEen: "Charging",
        categoryTitlEtr: "Şarj etme",
        image: charging,
        url: "/api-shop",
      },
      {
        id: 2,
        categoryTitlEen: "On The Road",
        categoryTitlEtr: "Yolda ",
        image: onTheRoad,
        url: "/api-shop",
      },
      {
        id: 3,
        categoryTitlEen: "Parts",
        categoryTitlEtr: "Parçalar",
        image: parts,
        url: "/api-shop",
      },
    ],
  },
  {
    id: 2,
    categorYen: "Vehicle Accessories",
    categorYtr: "Araç Aksesuarları",
    produstsUrl: "/shop/Vehicle Accessories/products",
    items: [
      {
        id: 1,
        categoryTitlEen: "Model S",
        categoryTitlEtr: "Model S",
        image: modelS,
        url: "/shop/Vehicle Accessories/Model S",
      },
      {
        id: 2,
        categoryTitlEen: "Model 3",
        categoryTitlEtr: "Model 3",
        image: model3,
        url: "/shop/Vehicle Accessories/Model 3",
      },
      {
        id: 3,
        categoryTitlEen: "Model X",
        categoryTitlEtr: "Model X",
        image: modelX,
        url: "/shop/Vehicle Accessories/Model X",
      },
      {
        id: 4,
        categoryTitlEen: "Model Y",
        categoryTitlEtr: "Model Y",
        image: modelY,
        url: "/shop/Vehicle Accessories/Model Y",
      },
    ],
  },
  {
    id: 3,
    categorYen: "Apparel",
    categorYtr: "Giyim",
    produstsUrl: "/shop/Vehicle Accessories/products",
    items: [
      {
        id: 1,
        categoryTitle: "Men",
        image: men,
        url: "",
      },
      {
        id: 2,
        categoryTitle: "Women",
        image: women,
        url: "",
      },
      {
        id: 3,
        categoryTitle: "Kids",
        image: kids,
        url: "",
      },
    ],
  },
  {
    id: 4,
    categorYen: "Lifestyle",
    categorYtr: "Yaşam Tarzı",
    produstsUrl: "/shop/Vehicle Accessories/products",
    items: [
      {
        id: 1,
        categoryTitlEen: "Best Sellers",
        categoryTitlEtr: "En Çok Satanlar",
        image: bestSellers,
        url: "",
      },
      {
        id: 2,
        categoryTitlEen: "Bags",
        categoryTitlEtr: "Çantalar",
        image: bags,
        url: "",
      },
      {
        id: 3,
        categoryTitlEen: "DrinkWare",
        categoryTitlEtr: "İçki Ürünleri",
        image: drinkWare,
        url: "",
      },
      {
        id: 4,
        categoryTitlEen: "Mini Teslas",
        categoryTitlEtr: "Mini Teslas",
        image: miniteslas,
        url: "",
      },
      {
        id: 5,
        categoryTitlEen: "Tech",
        categoryTitlEtr: "Teknoloji",
        image: outDoor,
        url: "",
      },
      {
        id: 6,
        categoryTitlEen: "Gift Card",
        categoryTitlEtr: "Hediye Kartı",
        image: giftCart,
        url: "",
      },
    ],
  },
  {
    id: 5,
    categorYen: "Language",
    categorYtr: "Dil",
    items: [
      {
        id: 1,
        country: "United States",
        language: "English",
        lng: "en",
      },
      {
        id: 2,
        country: "Turkey",
        language: "Turkey",
        lng: "tr",
      },
    ],
  },
];

export default dropMobileMenuDb;
