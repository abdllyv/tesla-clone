import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export const Validation = ({ children }) => {
  const [token, setToken] = useState(false);
  /* ---------------------------- Set Local Storage --------------------------- */

  useEffect(() => {
    const getSaveCart = () => {
      const checkLogin = JSON.parse(localStorage.getItem("token"));
      if (checkLogin !== null) {
        setToken(true);
      }
    };
    getSaveCart();
  }, []);

  const logOut = () => {
    setToken(false);
    localStorage.setItem("token", JSON.stringify(null));
  };
  const globalStates = {
    // State
    token,
    setToken,
    // Funtion
    logOut,
  };
  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
