/* --------------------------------- Images --------------------------------- */
import bestSellers from "../../assets/img/lifestyle/1715672-00-A_featured.avif";
import bags from "../../assets/img/lifestyle/1859926-00-A_flyout_01.avif";
import drinkWare from "../../assets/img/lifestyle/sipping-glass-flyout.avif";
import miniteslas from "../../assets/img/lifestyle/FeaturedNavMPOS_1524001-00-A.avif";
import outDoor from "../../assets/img/lifestyle/FeaturedNav_w_charger.avif";
import giftCart from "../../assets/img/lifestyle/Tesla_giftcard.avif";

/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* ----------------------------- Button ----------------------------- */
import WhiteBlackBtn from "../WhiteBlackBtn";

const MobileLifestyle = () => {
  return (
    <div className="cart-body">
      <h2 className="current-page">LifeStyle</h2>
      <Link className="card">
        <div className="top">
          <img src={bestSellers} alt="bestSellers" />
        </div>
        <h4 className="title">Best Sellers</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={bags} alt="bags" />
        </div>
        <h4 className="title">Bags</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={drinkWare} alt="drinkWare" />
        </div>
        <h4 className="title">DrinkWare</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={miniteslas} alt="miniteslas" />
        </div>
        <h4 className="title">Mini Teslas</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={outDoor} alt="outDoor" />
        </div>
        <h4 className="title">OutDoor & Tech</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={giftCart} alt="giftCart" />
        </div>
        <h4 className="title">Gift Card</h4>
      </Link>
      <WhiteBlackBtn text={"View All"} />
    </div>
  );
};

export default MobileLifestyle;
