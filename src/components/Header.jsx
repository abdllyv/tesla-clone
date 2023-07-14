// /* ------------------------------- Logo Image ------------------------------- */
import logo from "../assets/img/tesla-9.svg";
import dropdownImgFirst from "../assets/img/feature_wall_connector.avif";
import dropdownImgSecond from "../assets/img/1938526-00-A_flyout.avif";
import dropdownImgThird from "../assets/img/1975353-00-A_Pride_tee_flyout.avif";
import dropdownImgFourth from "../assets/img//1859926-00-A_flyout.avif";
import { Link } from "react-router-dom";
/* ---------------------------------- Icon ---------------------------------- */
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineRight,
} from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";

import { useState } from "react";

const Header = () => {
  //   /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);
  const [dropdownMenuState, setDropdownMenuState] = useState({
    activeDropdown: null,
  });
  /* ----------------------------- Opened Dropmenu ---------------------------- */
  const handleDropdownEnter = (dropdownName) => {
    setDropdownMenuState({
      ...dropdownMenuState,
      activeDropdown: dropdownName,
    });
  };
  /* ----------------------------- Closed Dropmenu ---------------------------- */
  const handleDropdownLeave = () => {
    setDropdownMenuState({
      ...dropdownMenuState,
      activeDropdown: null,
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link className="logo-img">
              <img src={logo} alt="logo" />
            </Link>
            <span className="stick">|</span>
            <Link className="current-page"> Shop</Link>
          </div>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li
                className="nav-items"
                onMouseEnter={() => handleDropdownEnter("charging")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link>Charging</Link>
                <div
                  className={`dropdown-menu ${
                    dropdownMenuState.activeDropdown === "charging"
                      ? "isShown"
                      : ""
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
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => handleDropdownEnter("vehicleAccessories")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link>Vehicle Accessories</Link>
                <div
                  className={`dropdown-menu ${
                    dropdownMenuState.activeDropdown === "vehicleAccessories"
                      ? "isShown"
                      : ""
                  }`}
                >
                  <div className="dropdown-container">
                    <div className="row">
                      <div className="left-side">
                        <div className="drop-list">
                          <Link className="drop-title">Model S</Link>
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
                          <Link className="drop-title">Model 3</Link>
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
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => handleDropdownEnter("apparel")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link>Apparel</Link>
                <div
                  className={`dropdown-menu ${
                    dropdownMenuState.activeDropdown === "apparel"
                      ? "isShown"
                      : ""
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
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => handleDropdownEnter("lifestyle")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link>Lifestyle</Link>
                <div
                  className={`dropdown-menu ${
                    dropdownMenuState.activeDropdown === "lifestyle"
                      ? "isShown"
                      : ""
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
              </li>
            </ul>
          </nav>
          <div className="user-area">
            <form className="seacrh-form">
              <div
                className={inpIsOpen ? "search-inp  isOpenInp" : "search-inp"}
              >
                <input type="text" placeholder="Search" />
              </div>
              <div className="seacrh-icon" onClick={() => setInpIsOpen(true)}>
                <AiOutlineSearch />
              </div>
            </form>
            <div className="cart">
              <div className="count">0</div>
              <AiOutlineShoppingCart />
            </div>
            <span className="menu-text" onClick={() => setMenuIsOpen(true)}>
              Menu
            </span>
          </div>
        </div>
      </div>
      <div className={menuIsOpen ? "menu-box isOpenMenu " : "menu-box"}>
        <div className="cartHead">
          <div className="icon">
            <AiOutlineClose onClick={() => setMenuIsOpen(false)} />
          </div>
        </div>
        <div className="cartBody">
          <form className="seacrh-form-mobile"></form>
          <ul className="nav-list-mobile">
            <li className="nav-items">
              <Link>Charging </Link>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
            <li className="nav-items">
              <Link>Vehicle Accessories</Link>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
            <li className="nav-items">
              <Link>Apparel</Link>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
            <li className="nav-items">
              <Link>Lifestyle</Link>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
          </ul>
          <ul className="menu-general-info-list">
            <li className="menu-items">
              <Link>Shop FAQ</Link>
            </li>
            <li className="menu-items">
              <Link>Sign In</Link>
            </li>
            <li className="languageSelect menu-items">
              <Link>
                <div className="left-side">
                  <MdOutlineLanguage />
                </div>
                <div className="right-side">
                  <h5 className="country">United States</h5>
                  <p className="language">English</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay  ${menuIsOpen && "isOpen"} `}
        onClick={() => setMenuIsOpen(false)}
      ></div>
      <div
        className={`overlay-inp  ${inpIsOpen && "isOpen"} `}
        onClick={() => setInpIsOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
/* ------------------------------- Logo Image ------------------------------- */
