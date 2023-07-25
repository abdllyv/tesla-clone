import { useEffect, useRef, useState } from "react";
import Cart from "../components/Cart";
import generalDb from "../db/generalDb";
import { useParams } from "react-router-dom";

const Shop = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState([]);
  /* --------------------------------- Params --------------------------------- */
  const { categoryName, categoryTitleName, categoryType } = useParams();

/* ------------------------------ Get Elements ------------------------------ */
  const refs = useRef([]);
  const addToRefs = (element) => {
    if (element && !refs.current.includes(element)) {
      refs.current.push(element);
    }
  };

  /* --------------------------------- getData -------------------------------- */
  useEffect(() => {
    const getData = () => {
      generalDb.map((products) => {
        if (
          products.category === categoryName &&
          categoryTitleName === "products"
        ) {
          return setData(products.items);
        } else if (
          products.category === categoryName &&
          categoryTitleName !== "products"
        ) {
          return products.items.map(
            (item) =>
              item.categoryTitle === categoryTitleName && setData([item])
          );
        } else {
          return null;
        }
      });
    };
    getData();
  }, [categoryName, categoryTitleName]);

  /* ------------------------ scroll-behavior: smooth; ------------------------ */
  useEffect(() => {
    setTimeout(() => {
      refs.current.forEach((ref) => {
        if (ref.id === categoryType) {
          ref.scrollIntoView({ behavior: "smooth" });
        } else {
          return false;
        }
      });
    }, 100);
  }, [categoryType]);
  return (
    <main>
      <section className="shop">
        <div className="container">
          {data.map((item) => (
            <div className="product-category" key={item.id}>
              <div className="category-head">
                <h1 className="title">{item.categoryTitle}</h1>
              </div>
              {Array.from(
                new Set(item.products.map((product) => product.categoryType))
              ).map((categoryType) => (
                <div
                  className="category-container"
                  key={categoryType}
                >
                  <h2
                    className="category-title"
                    id={categoryType}
                    ref={addToRefs}
                  >
                    {categoryType}
                  </h2>
                  <div className="products">
                    {item.products.map(
                      (product) =>
                        product.categoryType === categoryType && (
                          <Cart
                            key={product.id}
                            product={product}
                            category={categoryName}
                            categoryTitle={item.categoryTitle}
                          />
                        )
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Shop;
