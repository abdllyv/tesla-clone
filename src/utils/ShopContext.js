import { createContext, useEffect, useState } from "react";

/* ------------------------------- SweetAlert ------------------------------- */
import { createRemoveAlert } from "../components/SweetAlert";

export const ShopContext = createContext();

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [total, setTotal] = useState(0);

  /* --------------------------- Start Local Storage -------------------------- */
  /* ------------------- Get Data -------------------*/
  useEffect(() => {
    const getSaveCart = () => {
      const saveData = JSON.parse(localStorage.getItem("cart"));
      if (saveData !== null) {
        setCart(saveData);
      }
    };
    getSaveCart();
  }, []);

  /* ------------------- Set Data -------------------*/
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  /* ---------------------------- End Local Storage --------------------------- */

  useEffect(() => {
    /* ------------------- Cart Quantity Total -------------------*/
    const calcQuantity = () => {
      let quantify = cart.map((item) => item.quantify);
      let totalQuatity = quantify.reduce((acc, curr) => acc + curr, 0);
      setCartSum(totalQuatity);
    };

    /* ------------------- Calculate Tota price -------------------*/
    const totalSum = () => {
      let productPrice = cart.map(
        (item) => item.quantify * Number(item.price.replace(",", ""))
      );
      let sum = productPrice.reduce((acc, curr) => acc + curr, 0);
      setTotal(sum);
    };

    totalSum();
    calcQuantity();
  }, [cart]);

  /* ------------------------------- Add To Cart ------------------------------ */
  const addToCart = (product) => {
    const excittingProduct = cart.find((item) => item.id === product.id);
    if (excittingProduct) {
      let updatedCart = cart.map((item) => {
        if (excittingProduct.id === item.id) {
          return { ...item, quantify: item.quantify + product.quantify };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeData = (dataId) => {
    createRemoveAlert(
      "Remove Item",
      "Are you sure you want to remove this item from your cart?",
      "Yes, Remove",
      () => {
        const updatedCart = cart.filter((item) => item.id !== dataId);
        setCart(updatedCart);
      }
    );
  };

  const removeAllData = () => {
    createRemoveAlert(
      "Remove Item",
      "Are you sure you want to remove All Product from your cart?",
      "Yes, Remove",
      () => {
        setCart([]);
      }
    );
  };

  const changeQuantity = ({ data, quantity }) => {

    let updatedCart = cart.map((item) => {
      if (item.id === data.id) {
        return { ...item, quantify: quantity };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };
  const globalStates = {
    // Local State
    cart,
    setCart,
    cartSum,
    setCartSum,
    total,
    setTotal,
    // Function
    addToCart,
    removeData,
    removeAllData,
    changeQuantity,
  };
  return (
    <ShopContext.Provider value={globalStates}>{children}</ShopContext.Provider>
  );
};
