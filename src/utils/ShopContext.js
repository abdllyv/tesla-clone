import { createContext, useState } from "react";

export const ShopContext = createContext();

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* ------------------------------- Add To Cart ------------------------------ */
  const addToCart = (product) => {
    const excittingProduct = cart.find((item) => item.id === product.id);
    if (excittingProduct) {
      let updatedCart = cart.map((item) => {
        if (excittingProduct.id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const globalStates = {
    // Local State
    cart,
    setCart,
    // Function
    addToCart,
  };
  return (
    <ShopContext.Provider value={globalStates}>{children}</ShopContext.Provider>
  );
};
