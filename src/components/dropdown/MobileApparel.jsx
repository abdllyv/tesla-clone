/* --------------------------------- Images --------------------------------- */
import men from "../../assets/img/apparel/mobile_nav_mens.avif";
import women from "../../assets/img/apparel/mobile_nav_womens_chill2.avif";
import kids from "../../assets/img/apparel/mobile_nav_kids_cyber.avif";

/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* ----------------------------- Button ----------------------------- */
import WhiteBlackBtn from "../WhiteBlackBtn";

const MobileApparel = () => {
  return (
    <div className="cart-body">
      <h2 className="current-page">Apparel</h2>
      <Link className="card">
        <div className="top">
          <img src={men} alt="clothes-category" />
        </div>
        <h4 className="title">Men</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={women} alt="clothes-category" />
        </div>
        <h4 className="title">Women</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={kids} alt="clothes-category" />
        </div>
        <h4 className="title">Kids</h4>
      </Link>
      <WhiteBlackBtn text={"View All"} />
    </div>
  );
};

export default MobileApparel;
