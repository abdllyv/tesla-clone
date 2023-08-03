/* ---------------------------------- React --------------------------------- */
import { useContext, useEffect } from "react";

/* -------------------------------- Component ------------------------------- */
import Product from "../components/Product";

/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";
import Btn from "../components/Btn";

/* --------------------------------- Router --------------------------------- */
import { useLocation } from "react-router-dom";

const CartProducts = () => {
  /* ------------------------------ Global State ------------------------------ */
  const { cart, total, removeAllData } = useContext(ShopContext);

  /* --------------------------------- Router --------------------------------- */
  const { pathname } = useLocation();

  /* ---------------------- Reset keeping Scroll Position --------------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <section className="cart-products">
        <div className="container">
          <div className="row">
            <div className="cart-info">
              <div className="cart-title">Cart</div>
              <Product />
              {cart.length !== 0 && (
                <Btn
                  text={"Remove All Data"}
                  link={"#"}
                  onClick={() => removeAllData()}
                />
              )}
            </div>
            <div className="last-check">
              <div className="check-cart">
                <h4 className="title">Order Summary</h4>
                <div className="general-info">
                  <p className="text">Shipping</p>
                  <p className="text">Free</p>
                </div>
                <div className="general-info">
                  <div className="text-group">
                    <p className="text">Shipping</p>
                  </div>
                  <p className="text">Free</p>
                </div>
                <div className="general-info">
                  <h4 className="total-title">Subtotal</h4>
                  <h4 className="total-price">{total}$</h4>
                </div>
                <div className="primary-btn">
                  <Btn text={"Checkout"} link={"#"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartProducts;
// /* ---------------------------------- React --------------------------------- */
// import { useContext, useEffect } from "react";

// /* -------------------------------- Component ------------------------------- */
// import Product from "../components/Product";

// /* --------------------------------- Context -------------------------------- */
// import { ShopContext } from "../utils/ShopContext";
// import Btn from "../components/Btn";

// /* --------------------------------- Router --------------------------------- */
// import { useLocation } from "react-router-dom";

// const CartProducts = () => {

//   /* ------------------------------ Global State ------------------------------ */
//   const { cart, total, removeAllData } = useContext(ShopContext);

//   /* --------------------------------- Router --------------------------------- */
//   const { pathname } = useLocation();

//   /* ---------------------- Reset keeping Scroll Position --------------------- */
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <main>
//       <section className="cart-products">
//         <div className="container">
//           <div className="row">
//             <div className="cart-info">
//               <div className="cart-title">Cart</div>
//               {cart.map((item) => (
//                 <Product key={item.id} data={item} />
//               ))}
//               {cart.length !== 0 && (
//                 <Btn
//                   text={"Remove All Data"}
//                   link={"#"}
//                   onClick={()=>removeAllData()}
//                 />
//               )}
//             </div>
//             <div className="last-check">
//               <div className="check-cart">
//                 <h4 className="title">Order Summary</h4>
//                 <div className="general-info">
//                   <p className="text">Shipping</p>
//                   <p className="text">Free</p>
//                 </div>
//                 <div className="general-info">
//                   <div className="text-group">
//                     <p className="text">Shipping</p>
//                   </div>
//                   <p className="text">Free</p>
//                 </div>
//                 <div className="general-info">
//                   <h4 className="total-title">Subtotal</h4>
//                   <h4 className="total-price">{total}$</h4>
//                 </div>
//                 <div className="primary-btn">
//                   <Btn text={"Checkout"} link={"#"} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>
//     </main>
//   );
// };

// export default CartProducts;
