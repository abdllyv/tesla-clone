/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";
/* ---------------------------------- Image --------------------------------- */
import dropdownImgSecond from "../../assets/img/1938526-00-A_flyout.avif";

const DropdowVehicleAccessories = ({ dropdownMenuState }) => {
  return (
    <div
      className={`dropdown-menu ${
        dropdownMenuState === "vehicleAccessories" ? "isShown" : ""
      }`}
    >
      <div className="dropdown-container">
        <div className="row">
          <div className="left-side">
            <div className="drop-list">
              <Link className="drop-title" to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${""}`}>Model S</Link>
              <ul className="dropmenu-list">
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Best Sellers"}`}>Best Sellers</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Interior"}`}>Interior</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Exterior"}`}>Exterior</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Wheels and Tires"}`}>Wheels and Tires</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Floor Mats"}`}>Floor Mats</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Parts"}`}>Parts</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model S"}/${"Keys"}`}>Keys</Link>
                </li>
              </ul>
            </div>
            <div className="drop-list">
              <Link className="drop-title" to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${""}`}>Model 3</Link>
              <ul className="dropmenu-list">
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Best Sellers"}`}>Best Sellers</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Interior"}`}>Interior</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Exterior"}`}>Exterior</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Wheels and Tires"}`}>Wheels and Tires</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Floor Mats"}`}>Floor Mats</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Parts"}`}>Parts</Link>
                </li>
                <li className="drop-item">
                  <Link to={`/shop/${"Vehicle Accessories"}/${"Model 3"}/${"Keys"}`}>Keys</Link>
                </li>
              </ul>
            </div>
            <div className="drop-list">
              <Link className="drop-title">Model X</Link>
              <ul className="dropmenu-list">
                <li className="drop-item">
                  <Link>Best Sellers</Link>
                </li>
                <li className="drop-item">
                  <Link>Interior</Link>
                </li>
                <li className="drop-item">
                  <Link>Exterior</Link>
                </li>
                <li className="drop-item">
                  <Link>Wheels and Tires</Link>
                </li>
                <li className="drop-item">
                  <Link>Floor Mats</Link>
                </li>
                <li className="drop-item">
                  <Link>Parts</Link>
                </li>
                <li className="drop-item">
                  <Link>Keys</Link>
                </li>
              </ul>
            </div>
            <div className="drop-list">
              <Link className="drop-title">Model Y</Link>
              <ul className="dropmenu-list">
                <li className="drop-item">
                  <Link>Best Sellers</Link>
                </li>
                <li className="drop-item">
                  <Link>Interior</Link>
                </li>
                <li className="drop-item">
                  <Link>Exterior</Link>
                </li>
                <li className="drop-item">
                  <Link>Wheels and Tires</Link>
                </li>
                <li className="drop-item">
                  <Link>Floor Mats</Link>
                </li>
                <li className="drop-item">
                  <Link>Parts</Link>
                </li>
                <li className="drop-item">
                  <Link>Keys</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <div className="top">
              <img src={dropdownImgSecond} alt="cars" />
            </div>
            <h3 className="title">Wall Conector</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdowVehicleAccessories;
