/* --------------------------------- IMages --------------------------------- */
import modelS from "../../assets/img/vehicle-accessories/Model_S.avif";
import model3 from "../../assets/img/vehicle-accessories/Model_3.avif";
import modelX from "../../assets/img/vehicle-accessories/Model_x.avif";
import modelY from "../../assets/img/vehicle-accessories/Model_y.avif";

/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* ----------------------------- Button ----------------------------- */
import WhiteBlackBtn from "../WhiteBlackBtn";
const MobileVehicleAccessories = () => {
  return (
    <div className="cart-body">
      <h2 className="current-page">Vehicle Accessories</h2>
      <Link
        className="card"
        to={`/shop/${"Vehicle Accessories"}/${"Model S"}/""`}
      >
        <div className="top">
          <img src={modelS} alt="teslaCar" className="car-img" />
        </div>
        <h4 className="title">Model S</h4>
      </Link>
      <Link
        className="card"
        to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/""`}
      >
        <div className="top">
          <img src={model3} alt="teslaCar" className="car-img" />
        </div>
        <h4 className="title">Model 3</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={modelY} alt="teslaCar" className="car-img" />
        </div>
        <h4 className="title">Model Y</h4>
      </Link>
      <Link className="card">
        <div className="top">
          <img src={modelX} alt="teslaCar" className="car-img" />
        </div>
        <h4 className="title">Model X</h4>
      </Link>
      <WhiteBlackBtn text={"View All"} />
    </div>
  );
};

export default MobileVehicleAccessories;
