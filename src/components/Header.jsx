// /* ------------------------------- Logo Image ------------------------------- */
import logo from "../assets/img/tesla-9.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

/* -------------------------------- Dropdown -------------------------------- */
import DropdownCharging from "./dropdown/DropdownCharging";
import DropdowVehicleAccessories from "./dropdown/DropdowVehicleAccessories";
import DropdownApparel from "./dropdown/DropdownApparel";
import DropdownLifestyle from "./dropdown/DropdownLifestyle";

/* ---------------------------------- Icon ---------------------------------- */
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";

const Header = () => {
  //   /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);
  const [dropdownMenuState, setDropdownMenuState] = useState(null);
  const [languageBox, setLanguageBox] = useState(false);

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
                onMouseEnter={() => setDropdownMenuState("charging")}
                onMouseLeave={() => setDropdownMenuState(null)}
              >
                <Link>Charging</Link>
                <DropdownCharging dropdownMenuState={dropdownMenuState} />
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => setDropdownMenuState("vehicleAccessories")}
                onMouseLeave={() => setDropdownMenuState(null)}
              >
                <Link>Vehicle Accessories</Link>
                <DropdowVehicleAccessories
                  dropdownMenuState={dropdownMenuState}
                />
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => setDropdownMenuState("apparel")}
                onMouseLeave={() => setDropdownMenuState(null)}
              >
                <Link>Apparel</Link>
                <DropdownApparel dropdownMenuState={dropdownMenuState} />
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => setDropdownMenuState("lifestyle")}
                onMouseLeave={() => setDropdownMenuState(null)}
              >
                <Link>Lifestyle</Link>
                <DropdownLifestyle dropdownMenuState={dropdownMenuState} />
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
        <div className="cart-head">
          <div className="icon">
            <AiOutlineClose onClick={() => setMenuIsOpen(false)} />
          </div>
        </div>
        <div className="cart-body">
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
            <li className="language-select menu-items">
              <div className="info" onClick={() => setLanguageBox(true)}>
                <div className="left-side">
                  <MdOutlineLanguage />
                </div>
                <div className="right-side">
                  <h5 className="country">United States</h5>
                  <p className="language">English</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          languageBox
            ? "language-list menu-box isOpenMenu"
            : "language-list menu-box"
        }
      >
        <div className="cart-head">
          <span className="navigate" onClick={() => setLanguageBox(false)}>
            <div className="back-icon">
              <AiOutlineLeft />
            </div>
            Back
          </span>
          <div className="icon">
            <AiOutlineClose
              onClick={() => {
                setMenuIsOpen(false);
                setLanguageBox(false);
              }}
            />
          </div>
        </div>
        <div className="cart-body">
          <ul className="menu-general-info-list">
            <h4 className="continent">North America</h4>
            <li className="select-language menu-items">
              <h5 className="country">United States</h5>
              <p className="language">English</p>
            </li>
            <li className="select-language menu-items">
              <h5 className="country">United States</h5>
              <p className="language">English</p>
            </li>
            <li className="select-language menu-items">
              <h5 className="country">United States</h5>
              <p className="language">English</p>
            </li>
            <h4 className="continent">North America</h4>
            <li className="select-language menu-items">
              <h5 className="country">United States</h5>
              <p className="language">English</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay  ${menuIsOpen && "isOpen"} `}
        onClick={() => {
          setMenuIsOpen(false);
          setLanguageBox(false);
        }}
      ></div>
      <div
        className={`overlay-inp  ${inpIsOpen && "isOpen"} `}
        onClick={() => setInpIsOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
