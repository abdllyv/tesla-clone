import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import productDb from "../db/productDb";

const Shop = () => {
  const [uniqueCategories, setUniqueCategories] = useState([]);
  useEffect(() => {
    const categories = [...new Set(productDb.map((item) => item.category))];
    setUniqueCategories(categories);
  }, []);
  console.log(uniqueCategories);
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
                {productDb.map(
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
