import dropdownImgFirst from "../../assets/img/feature_wall_connector.avif";
import { Link } from "react-router-dom";
const DropdownCharging = ({ dropdownMenuState }) => {
  return (
    <div
      className={`dropdown-menu ${
        dropdownMenuState === "charging" ? "isShown" : ""
      }`}
    >
      <div className="dropdown-container">
        <div className="row">
          <div className="left-side">
            <div className="drop-list">
              <Link className="drop-title">At Home</Link>
            </div>
            <div className="drop-list">
              <Link className="drop-title">On The Road</Link>
            </div>
            <div className="drop-list">
              <Link className="drop-title">Parts</Link>
            </div>
          </div>
          <div className="right-side">
            <div className="top">
              <img src={dropdownImgFirst} alt="charging" />
            </div>
            <h3 className="title">Wall Conector</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownCharging;
