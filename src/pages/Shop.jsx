import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import generalDb from "../db/generalDb";
import { useParams } from "react-router-dom";

const Shop = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState([]);
  /* --------------------------------- Params --------------------------------- */
  const { categoryName, categoryTitleName } = useParams();

  useEffect(() => {
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
          (item) => item.categoryTitle === categoryTitleName && setData([item])
        );
      } else {
        return null;
      }
    });
  }, [categoryName, categoryTitleName]);

  return (
    <main>
      <section className="shop">
        <div className="container">
          {data.map((item) => (
            <div className="products" key={item.id}>
              <div className="category-head">
                <h1 className="title">{item.categoryTitle}</h1>
              </div>
              {Array.from(
                new Set(item.products.map((product) => product.categoryType))
              ).map((categoryType) => (
                <div
                  className="category-container"
                  key={categoryType}
                  id={categoryType}
                >
                  <h2 className="category-title">{categoryType}</h2>
                  <div className="products">
                    {item.products.map(
                      (product) =>
                        product.categoryType === categoryType && (
                          <Cart key={product.id} product={product} category={categoryName} categoryTitle={item.categoryTitle} />
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
