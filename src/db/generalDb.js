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
    id: 1,
    category: "Vehicle Accessories",
    items: [
      {
        id: 1,
        categoryTitle: "Model S",
        products: [
          {
            id: 1,
            title: "Model S All-Weather Interior Liners",
            categoryType: "Best Sellers",
            price: "250",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 100,
                productImg: product1Pimary,
              },
              {
                id: 101,
                productImg: product1Secondary,
              },
            ],
          },
          {
            id: 2,
            title: "Model S Plaid Track Package",
            categoryType: "Best Sellers",
            price: "15,000 ",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 103,
                productImg: product2Pimary,
              },
              {
                id: 104,
                productImg: product2Secondary,
              },
            ],
          },
          {
            id: 3,
            title: `Model S Plaid 20" Zero-G Wheel and Tire Package`,
            categoryType: "Best Sellers",
            price: "6,000",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 105,
                productImg: product3Pimary,
              },
              {
                id: 106,
                productImg: product3Secondary,
              },
            ],
          },
          {
            id: 4,
            title: "Model S/3/Y Pet Liner",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 107,
                productImg: product4Pimary,
              },
              {
                id: 108,
                productImg: product4Secondary,
              },
            ],
          },
          {
            id: 5,
            title: "Model S/X Steering Wheel Retrofit",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 109,
                productImg: product5Pimary,
              },
              {
                id: 110,
                productImg: product5Secondary,
              },
            ],
          },
          {
            id: 6,
            title: "Model S Glass Roof Sunshade",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 111,
                productImg: product6Pimary,
              },
              {
                id: 112,
                productImg: product6Secondary,
              },
            ],
          },
          {
            id: 7,
            title: "2012-2020 | Model S Illuminated Door Sills",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 113,
                productImg: product7Pimary,
              },
              {
                id: 114,
                productImg: product7Secondary,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        categoryTitle: "Model 3",
        products: [
          {
            id: 1,
            title: "Model S All-Weather Interior Liners",
            categoryType: "Best Sellers",
            price: "250",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 100,
                productImg: product1Pimary,
              },
              {
                id: 101,
                productImg: product1Secondary,
              },
            ],
          },
          {
            id: 2,
            title: "Model S Plaid Track Package",
            categoryType: "Best Sellers",
            price: "15,000 ",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 103,
                productImg: product2Pimary,
              },
              {
                id: 104,
                productImg: product2Secondary,
              },
            ],
          },
          {
            id: 3,
            title: `Model S Plaid 20" Zero-G Wheel and Tire Package`,
            categoryType: "Best Sellers",
            price: "6,000",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 105,
                productImg: product3Pimary,
              },
              {
                id: 106,
                productImg: product3Secondary,
              },
            ],
          },
          {
            id: 4,
            title: "Model S/3/Y Pet Liner",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 107,
                productImg: product4Pimary,
              },
              {
                id: 108,
                productImg: product4Secondary,
              },
            ],
          },
          {
            id: 5,
            title: "Model S/X Steering Wheel Retrofit",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 109,
                productImg: product5Pimary,
              },
              {
                id: 110,
                productImg: product5Secondary,
              },
            ],
          },
          {
            id: 6,
            title: "Model S Glass Roof Sunshade",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 111,
                productImg: product6Pimary,
              },
              {
                id: 112,
                productImg: product6Secondary,
              },
            ],
          },
          {
            id: 7,
            title: "2012-2020 | Model S Illuminated Door Sills",
            categoryType: "Interior",
            price: "9,500",
            detail:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            images: [
              {
                id: 113,
                productImg: product7Pimary,
              },
              {
                id: 114,
                productImg: product7Secondary,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "MoreOver",
    items: [
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
    ],
  },
];

export default generalDb;
