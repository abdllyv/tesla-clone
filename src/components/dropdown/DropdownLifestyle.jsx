import { Link } from "react-router-dom";
import dropdownImgFourth from "../../assets/img//1859926-00-A_flyout.avif";

const DropdownLifestyle = ({dropdownMenuState}) => {
  return (
    <div
    className={`dropdown-menu ${
      dropdownMenuState === "lifestyle" ? "isShown" : ""
    }`}
  >
    <div className="dropdown-container">
      <div className="row">
        <div className="left-side">
          <div className="drop-list">
            <Link className="drop-title">Best Sellers</Link>
          </div>
          <div className="drop-list">
            <Link className="drop-title">Bags</Link>
          </div>
          <div className="drop-list">
            <Link className="drop-title">DrinkWare</Link>
          </div>
          <div className="drop-list">
            <Link className="drop-title">Mini Tesla</Link>
          </div>
          <div className="drop-list">
            <Link className="drop-title">Outdoor & Tech</Link>
          </div>
          <div className="drop-list">
            <Link className="drop-title">Gift Card</Link>
          </div>
        </div>
        <div className="right-side">
          <div className="top">
            <img src={dropdownImgFourth} alt="bags" />
          </div>
          <h3 className="title">Mega Pack</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DropdownLifestyle