import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import generalDb from "../db/generalDb";

const Shop = () => {
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    generalDb.map(
      (item) => item.categoryTitle === "ModelS" && setData(item.products)
    );
    const categories = [...new Set(data.map((item) => item.category))];
    setUniqueCategories(categories);
  }, [data]);
  return (
    <main>
      <section className="shop">
        <div className="container">
          <div className="category-head">
            <h1 className="title">Model S</h1>
          </div>
          {uniqueCategories.map((item) => (
            <div className="category-container" key={item} id={item}>
              <h2 className="category-title">{item}</h2>
              <div className="products">
                {data.map(
                  (product) =>
                    product.category === item && (
                      <Cart key={product.id} product={product} />
                    )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Shop;
