/* ---------------------------------- Model S IMage --------------------------------- */
import product1Pimary from "../assets/img/shop-products/1669541-00-A_0_2000.avif";
import product1Secondary from "../assets/img/shop-products/1669541-00-A_1_2000.avif";
import product2Pimary from "../assets/img/shop-products/1938526-00-A_0_2000.avif";
import product2Secondary from "../assets/img/shop-products/1938526-00-A_1_2000.avif";
import product3Pimary from "../assets/img/shop-products/1940002-00-A_0_2000.avif";
import product3Secondary from "../assets/img/shop-products/1940002-00-A_1_2000.avif";
import product4Pimary from "../assets/img/shop-products/1562262-00-A_10_2000.avif";
import product4Secondary from "../assets/img/shop-products/1562262-00-A_11_2000.avif";
import product5Pimary from "../assets/img/shop-products/1916503-00-A_0_2000.avif";
import product5Secondary from "../assets/img/shop-products/1916503-00-A_02_2000.avif";
import product6Pimary from "../assets/img/shop-products/1130555-00-A_0_2000.avif";
import product6Secondary from "../assets/img/shop-products/1801350-00-A_1_2000.avif";
import product7Pimary from "../assets/img/shop-products/1537258-00-A_2_2000.avif";
import product7Secondary from "../assets/img/shop-products/1537258-00-A_3.avif";
/* ---------------------------------- Best Seller IMage --------------------------------- */
import product1 from "../assets/img/best-sellers-slider/1067348-00-B_0_2000.avif";
import product2 from "../assets/img/best-sellers-slider/1107681-00-A_0_2000.avif";
import product3 from "../assets/img/best-sellers-slider/1448751-00-B_0_2000.avif";
import product4 from "../assets/img/best-sellers-slider/1562262-00-A_10_2000.avif";
import product5 from "../assets/img/best-sellers-slider/1616599-00-A_0_2000.avif";
import product6 from "../assets/img/best-sellers-slider/1634268-00-A_0_2000.avif";
import product7 from "../assets/img/best-sellers-slider/1634443-00-A_0_2000.avif";
import product8 from "../assets/img/best-sellers-slider/1713539-00-A_0_2000.avif";

const generalDb = [
  {
    categoryTitle: "ModelS",
    products: [
      {
        id: 1,
        title: "Model S All-Weather Interior Liners",
        category: "Best Sellers",
        price: "250",
        primaryImg: product1Pimary,
        secondaryImg: product1Secondary,
      },
      {
        id: 2,
        title: "Model S Plaid Track Package",
        category: "Best Sellers",
        price: "15,000 ",
        primaryImg: product2Pimary,
        secondaryImg: product2Secondary,
      },
      {
        id: 3,
        title: `Model S Plaid 20" Zero-G Wheel and Tire Package`,
        category: "Best Sellers",
        price: "6,000",
        primaryImg: product3Pimary,
        secondaryImg: product3Secondary,
      },
      {
        id: 4,
        title: "Model S/3/Y Pet Liner",
        category: "Interior",
        price: "9,500",
        primaryImg: product4Pimary,
        secondaryImg: product4Secondary,
      },
      {
        id: 5,
        title: "Model S/X Steering Wheel Retrofit",
        category: "Interior",
        price: "9,500",
        primaryImg: product5Pimary,
        secondaryImg: product5Secondary,
      },
      {
        id: 6,
        title: "Model S Glass Roof Sunshade",
        category: "Interior",
        price: "9,500",
        primaryImg: product6Pimary,
        secondaryImg: product6Secondary,
      },
      {
        id: 7,
        title: "2012-2020 | Model S Illuminated Door Sills",
        category: "Interior",
        price: "9,500",
        primaryImg: product7Pimary,
        secondaryImg: product7Secondary,
      },
    ],
  },
  {
    categoryTitle: "Best Seller",
    products: [
      {
        id: 1,
        title: "SAE J1772 Charging Adapter",
        productIMg: product1,
      },
      {
        id: 2,
        title: "Model 3/Y Air Filter",

        productIMg: product2,
      },
      {
        id: 3,
        title: "Model 3 All-Weather Interior Liners",

        productIMg: product3,
      },
      {
        id: 4,
        title: "Model S/3/Y Pet Liner",

        productIMg: product4,
      },
      {
        id: 5,
        title: "Model 3 All-Weather Interior Liners",

        productIMg: product5,
      },
      {
        id: 6,
        title: "Model 3/Y Center Console Trays",

        productIMg: product6,
      },
      {
        id: 7,
        title: "Model Y Mud Flaps",

        productIMg: product7,
      },
      {
        id: 8,
        title: "Model Y All-Weather Rear Cargo Liner Set",

        productIMg: product8,
      },
    ],
  },
  {
    categoryTitle: "Recommended Products",
    products: [
      {
        id: 1,
        title: "SAE J1772 Charging Adapter",
        productIMg: product1,
      },
      {
        id: 2,
        title: "Model 3/Y Air Filter",

        productIMg: product2,
      },
      {
        id: 3,
        title: "Model 3 All-Weather Interior Liners",

        productIMg: product3,
      },
      {
        id: 4,
        title: "Model S/3/Y Pet Liner",

        productIMg: product4,
      },
      {
        id: 5,
        title: "Model 3 All-Weather Interior Liners",

        productIMg: product5,
      },
      {
        id: 6,
        title: "Model 3/Y Center Console Trays",

        productIMg: product6,
      },
      {
        id: 7,
        title: "Model Y Mud Flaps",

        productIMg: product7,
      },
      {
        id: 8,
        title: "Model Y All-Weather Rear Cargo Liner Set",

        productIMg: product8,
      },
    ],
  },
];

export default generalDb;
