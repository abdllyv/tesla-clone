import { Link } from "react-router-dom";
import dropdownImgThird from "../../assets/img/1975353-00-A_Pride_tee_flyout.avif";

const DropdownApparel = ({ dropdownMenuState }) => {
  return (
    <div
      className={`dropdown-menu ${
        dropdownMenuState === "apparel" ? "isShown" : ""
      }`}
    >
      <div className="dropdown-container">
        <div className="row">
          <div className="left-side">
            <div className="drop-list">
              <Link className="drop-title">At Home</Link>
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
              <Link className="drop-title">At Home</Link>
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
              <Link className="drop-title">At Home</Link>
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
              <Link className="drop-title">At Home</Link>
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
            <img src={dropdownImgThird} alt="tshirt" />
            <h3 className="title">Wall Conector</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownApparel;
