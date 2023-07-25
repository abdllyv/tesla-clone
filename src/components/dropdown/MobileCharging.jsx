/* --------------------------------- IMages --------------------------------- */
import charging from "../../assets/img/charging/FeaturedNavMPOS_1457768-02-G.avif";
import onTheRoad from "../../assets/img/charging/FeaturedNavMPOS_1512830-00-A.avif";
import parts from "../../assets/img/charging/FeaturedNavMPOS_1551813-00-A.avif";

/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* ----------------------------- Button ----------------------------- */
import WhiteBlackBtn from "../WhiteBlackBtn";

const MobileCharging = () => {
  return (
    <div className="cart-body">
      <h2 className="current-page">Charging</h2>
      <Link className="card" to="/api-shop">
        <div className="top">
          <img src={charging} alt="charging" />
        </div>
        <h4 className="title">Charging</h4>
      </Link>
      <Link className="card" to="/api-shop">
        <div className="top">
          <img src={onTheRoad} alt="onTheRoad" />
        </div>
        <h4 className="title">On The Road</h4>
      </Link>
      <Link className="card" to="/api-shop">
        <div className="top">
          <img src={parts} alt="parts" />
        </div>
        <h4 className="title">Parts</h4>
      </Link>
      <WhiteBlackBtn text={"View All"} />
    </div>
  );
};

export default MobileCharging;
