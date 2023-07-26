import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

import product1Pimary from "../assets/img/shop-products/1669541-00-A_0_2000.avif";
import { useState } from "react";
const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const quantities = [1, 2, 3, 4]; // Add more quantities if needed



  const handleQuantitySelect = (quantity) => {
    setSelectedQuantity(quantity);
    setIsOpen(false);
  };
  return (
    <ul className="product-list">
      <li className="product-items">
        <div className="product-image">
          <img src={product1Pimary} alt="" />
        </div>
        <div className="product-info">
          <div className="general-info">
            <h2 className="title">Model S All-Weather Interior Liners</h2>
            <h3 className="categorTitle">Model S</h3>
            <span className="quantify">Quantify: 1</span>
            <div className="select-quantify">
              <p className="text">Quantify:</p>
              <div className="select-number" onClick={()=>setIsOpen(true)}>
                <span className="number">1</span>
                <AiOutlineDown />
                <div className="dropdown">
                  {isOpen && (
                    <div className="dropdown">
                      <ul>
                        {quantities.map((quantity) => (
                          <li
                            key={quantity}
                            className={
                              selectedQuantity === quantity ? "active" : ""
                            }
                            onClick={() => handleQuantitySelect(quantity)}
                          >
                            {quantity}
                            {selectedQuantity === quantity && (
                              <div className="check-icon">
                                <AiOutlineCheck />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <button className="delete-btn">Remove</button>
            </div>
          </div>
        </div>
        <div className="price">
          <span>250$</span>
        </div>
      </li>
    </ul>
  );
};

export default Product;
// import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

// import product1Pimary from "../assets/img/shop-products/1669541-00-A_0_2000.avif";
// import { useState } from "react";
// const Product = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <ul className="product-list">
//       <li className="product-items">
//         <div className="product-image">
//           <img src={product1Pimary} alt="" />
//         </div>
//         <div className="product-info">
//           <div className="general-info">
//             <h2 className="title">Model S All-Weather Interior Liners</h2>
//             <h3 className="categorTitle">Model S</h3>
//             <span className="quantify">Quantify: 1</span>
//             <div className="select-quantify">
//               <p className="text">Quantify:</p>
//               <div className="select-number">
//                 <span className="number">1</span>
//                 <AiOutlineDown />
//                 <div className="dropdown">
//                   <ul>
//                     <li className="active">
//                       1
//                       <div className="check-icon">
//                         <AiOutlineCheck />
//                       </div>
//                     </li>
//                     <li>2</li>
//                   </ul>
//                 </div>
//               </div>
//               <button className="delete-btn">Remove</button>
//             </div>
//           </div>
//         </div>
//         <div className="price">
//           <span>250$</span>
//         </div>
//       </li>
//     </ul>
//   );
// };

// export default Product;

// import product1Pimary from "../assets/img/shop-products/1669541-00-A_0_2000.avif";
// const Product = () => {
//   return (
//     <ul className="product-list">
//     <li className="product-items">
//       <div className="product-image">
//         <img src={product1Pimary} alt="" />
//       </div>
//       <div className="product-info">
//         <div className="general-info">
//           <h2 className="title">Model S All-Weather Interior Liners</h2>
//           <span className="price">250$</span>
//         </div>
//         <h3 className="categorTitle">Model S</h3>
//         <span className="quantify">Quantify: 1</span>
//       </div>
//     </li>
//   </ul>
//   )
// }

// export default Product
