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
            titlEen: "Model S All-Weather Interior Liners",
            titlEtr: "Model S Tüm Hava Koşullarına Uygun İç Astarlar",
            categoryType: "Best Sellers",
            price: "250",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            titlEen: "Model S Plaid Track Package",
            titlEtr: "Model S Ekose Pist Paketi",
            categoryType: "Best Sellers",
            price: "15,000",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            titlEen: `Model S Plaid 20" Zero-G Wheel and Tire Package`,
            titlEtr: `Model S Ekose 20" Sıfır-G Jant ve Lastik Paketi`,
            categoryType: "Best Sellers",
            price: "6,000",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            titlEen: "Model S/3/Y Pet Liner",
            titlEtr: "Model S/3/Y Evcil Hayvan Astarı",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            titlEen: "Model S/X Steering Wheel Retrofit",
            titlEtr: "Model S/X Direksiyon Simidi Güçlendirme",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            titlEen: "Model S Glass Roof Sunshade",
            titlEtr: "Model S Cam Tavan Güneşliği",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            titlEen: "2012-2020 | Model S Illuminated Door Sills",
            titlEtr: "2012-2020 | Model S Aydınlatmalı Kapı Eşikleri",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 8,
            titlEen: "Model S All-Weather Interior Liners",
            titlEtr: "Model S Tüm Hava Koşullarına Uygun İç Astarlar",
            categoryType: "Best Sellers",
            price: "250",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 9,
            titlEen: "Model S Plaid Track Package",
            titlEtr: "Model S Ekose Pist Paketi",
            categoryType: "Best Sellers",
            price: "15,000 ",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 10,
            titlEen: `Model S Plaid 20" Zero-G Wheel and Tire Package`,
            titlEtr: `Model S Ekose 20" Sıfır-G Jant ve Lastik Paketi`,
            categoryType: "Best Sellers",
            price: "6,000",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 11,
            titlEen: "Model S/3/Y Pet Liner",
            titlEtr: "Model S/3/Y Evcil Hayvan Astarı",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 12,
            titlEen: "Model S/X Steering Wheel Retrofit",
            titlEtr: "Model S/X Direksiyon Güçlendirme",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather Interior Liners, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 13,
            titlEen: "Model S Glass Roof Sunshade",
            titlEtr: "Model S Cam Tavan Güneşliği",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather Interior Liners, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
            id: 14,
            titlEen: "2012-2020 | Model S Illuminated Door Sills",
            titlEtr: "2012-2020 | Model S Aydınlatmalı Kapı Eşikleri",
            categoryType: "Interior",
            price: "9,500",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather Interior Liners, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
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
        id: 1,
        categoryTitlEen: "Best Seller",
        categoryTitlEtr: "En Çok Satanlar",
        products: [
          {
            id: 15,
            titlEen: "SAE J1772 Charging Adapter",
            titlEtr: "SAE J1772 Şarj Adaptörü",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product1,
              },
            ],
          },

          {
            id: 16,
            titlEen: "Model 3/Y Air Filter",
            titlEtr: "Model 3/Y Hava Filtresi",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product2,
              },
            ],
          },
          {
            id: 17,
            titlEen: "Model 3 All-Weather Interior Liners",
            titlEtr: "Model 3 Tüm Hava Koşullarına Uygun İç Astarlar",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product3,
              },
            ],
          },
          {
            id: 18,
            titlEen: "Model S/3/Y Pet Liner",
            titlEtr: "Model S/3/Y Evcil Hayvan Astarı",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product4,
              },
            ],
          },
          {
            id: 19,
            titlEen: "Model 3 All-Weather Interior Liners",
            titlEtr: "Model 3 Tüm Hava Koşullarına Uygun İç Astarlar",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product5,
              },
            ],
          },
          {
            id: 20,
            titlEen: "Model 3/Y Center Console Trays",
            titlEtr: "Model 3/Y Orta Konsol Tepsileri",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather Interior Liners, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product6,
              },
            ],
          },
          {
            id: 21,
            titlEen: "Model Y Mud Flaps",
            titlEtr: "Model Y Çamurluklar",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product7,
              },
            ],
          },
          {
            id: 22,
            titlEen: "Model Y All-Weather Rear Cargo Liner Set",
            titlEtr: "Model Y All-Weather Arka Kargo Astarı Seti",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product8,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        categoryTitlEen: "Recommended Products",
        categoryTitlEtr: "Önerilen Ürünler",
        products: [
          {
            id: 23,
            titlEen: "SAE J1772 Charging Adapter",
            titlEtr: "SAE J1772 Şarj Adaptörü",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product1,
              },
            ],
          },

          {
            id: 24,
            titlEen: "Model 3/Y Air Filter",
            titlEtr: "Model 3/Y Hava Filtresi",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product2,
              },
            ],
          },
          {
            id: 25,
            titlEen: "Model 3 All-Weather Interior Liners",
            titlEtr: "Model 3 Tüm Hava Koşullarına Uygun İç Astarlar",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product3,
              },
            ],
          },
          {
            id: 26,
            titlEen: "Model S/3/Y Pet Liner",
            titlEtr: "Model S/3/Y Evcil Hayvan Astarı",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product4,
              },
            ],
          },
          {
            id: 27,
            titlEen: "Model 3 All-Weather Interior Liners",
            titlEtr: "Model 3 Tüm Hava Koşullarına Uygun İç Astarlar",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product5,
              },
            ],
          },
          {
            id: 28,
            titlEen: "Model 3/Y Center Console Trays",
            titlEtr: "Model 3/Y Orta Konsol Tepsileri",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product6,
              },
            ],
          },
          {
            id: 29,
            titlEen: "Model Y Mud Flaps",
            titlEtr: "Model Y Çamurluklar",

            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product7,
              },
            ],
          },
          {
            id: 30,
            titlEen: "Model Y All-Weather Rear Cargo Liner Set",
            titlEtr: "Model Y All-Weather Arka Kargo Astarı Seti",
            detailen:
              "Model S All-Weather Interior Liners are made from a thermoplastic elastomer material with a strong rigid core for extreme-duty protection and spatial coverage. Unlike traditional floor mats, Model S All-Weather Interior Liners are comprised of vertical walls that offer maximum protection to the footwell carpet and easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom-made using the latest digital measurements for Model S.",
            detailtr:
              "Model S All-Weather İç Döşemeler, aşırı görev koruması ve uzamsal kapsama alanı için güçlü bir sert çekirdeğe sahip termoplastik elastomer malzemeden yapılmıştır. Geleneksel paspasların aksine Model S All-Weather İç Gömlekler, ayak bölmesi halısına maksimum koruma ve kolay temizlik sağlayan dikey duvarlardan oluşur. Tesla Design Studio tarafından özel bir desenle oluşturulan bu astarlar, Model S için en son dijital ölçümler kullanılarak özel olarak üretilmiştir.",
            price: "250",
            images: [
              {
                id: 1,
                productImg: product8,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default generalDb;
