/* ------------------------------- Components ------------------------------- */
import { useEffect, useState } from "react";
import ApiCart from "../components/ApiCart";
import axios from "axios";

const ApiShop = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState([]);

/* ------------------------------- Get AllData ------------------------------ */
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(process.env.REACT_APP_ALL_PRODUCTS)
          .then((res) => setData(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <main>
      <section className="shop">
        <div className="container">
          <div className="product-category">
            <div className="category-head">
              <h1 className="title">Charging</h1>
            </div>
            <div className="category-container">
              <h2 className="category-title">On The Road</h2>
              <div className="products">
                {data.map(item=>(  <ApiCart product={item} key={item.id} /> ))}
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApiShop;
