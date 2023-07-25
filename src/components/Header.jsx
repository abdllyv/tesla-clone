// /* ------------------------------- Image ------------------------------- */
import logo from "../assets/img/tesla-9.svg";

import product1Pimary from "../assets/img/shop-products/1669541-00-A_0_2000.avif";

/* --------------------------------- Router --------------------------------- */
import { Link, useLocation } from "react-router-dom";
/* ----------------------------------React Hook ---------------------------------- */
import { useEffect, useState } from "react";

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

/* ------------------------------- Components ------------------------------- */
import WhiteBlackBtn from "./WhiteBlackBtn";
import BlueWhiteBtn from "./BlueWhiteBtn";
import MobileApparel from "./dropdown/MobileApparel";
import MobileCharging from "./dropdown/MobileCharging";
import MobileVehicleAccessories from "./dropdown/MobileVehicleAccessories";
import MobileLifestyle from "./dropdown/MobileLifestyle";
import LanguageList from "./LanguageList";

const Header = () => {
  //   /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);
  /* --------------------------- DropDown open-close -------------------------- */
  const [dropdownMenuState, setDropdownMenuState] = useState(null);
  /* --------------------------- Language open-close -------------------------- */
  const [languageBox, setLanguageBox] = useState(false);
  /* --------------------------- Cart open-close -------------------------- */
  const [cartIsOpen, setCartIsOpen] = useState(false);

  /* ------------------------- Header background color ------------------------ */
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  /* --------------------- Header Change Background Color --------------------- */
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY >= 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location]);

  /* ------------------------ Other Page Default Design && Close The Dropdown Menu----------------------- */
  useEffect(() => {
    if (location.pathname === "/") {
      setIsScrolled(false);
      setIsMouseOver(false);
    } else {
      setIsScrolled(true);
    }
    setMenuIsOpen(false);
    setDropdownMenuState(null);
    setCartIsOpen(false);
  }, [location]);

  return (
    <header
      className={`header ${
        isScrolled || (isMouseOver && location.pathname === "/")
          ? "bg-white"
          : ""
      }`}
      onMouseEnter={() => {
        if (location.pathname === "/") {
          setIsMouseOver(true);
        }
      }}
      onMouseLeave={() => {
        if (location.pathname === "/") {
          setIsMouseOver(false);
        }
      }}
    >
      <div className="container">
        <div className="row">
          {/* ------------------------------Logo------------------------------  */}
          <div className="logo">
            <Link className="logo-img">
              <img src={logo} alt="logo" />
            </Link>
            <span className="stick">|</span>
            <Link className="current-page" to="/">
              Shop
            </Link>
          </div>
          {/* ------------------------------NavBar------------------------------  */}
          <nav className="nav-bar">
            <ul className="nav-list">
              <li
                className="nav-items"
                onMouseEnter={() => setDropdownMenuState("charging")}
                onMouseLeave={() => setDropdownMenuState(null)}
              >
                <Link to="/api-shop">Charging</Link>
                <DropdownCharging dropdownMenuState={dropdownMenuState} />
              </li>
              <li
                className="nav-items"
                onMouseEnter={() => setDropdownMenuState("vehicleAccessories")}
                onMouseLeave={() => setDropdownMenuState(null)}
              >
                <Link to={`/shop/${"Vehicle Accessories"}/${"products"}/""`}>
                  Vehicle Accessories
                </Link>
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
          {/* ------------------------------UserArea------------------------------  */}
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
            <div className="cart" onClick={() => setCartIsOpen(true)}>
              <div className="count">0</div>
              <AiOutlineShoppingCart />
            </div>
            <span className="menu-text" onClick={() => setMenuIsOpen(true)}>
              Menu
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------Start Toggle Menu------------------------------  */}
      <div className={menuIsOpen ? "menu-box isOpenMenu " : "menu-box"}>
        <div className="cart-head">
          <div className="icon">
            <AiOutlineClose onClick={() => setMenuIsOpen(false)} />
          </div>
        </div>
        <div className="cart-body">
          <form className="seacrh-form-mobile"></form>
          <ul className="nav-list-mobile">
            <li
              className="nav-items"
              onClick={() => setDropdownMenuState("charging-mobile")}
            >
              <span className="text">Charging </span>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
            <li
              className="nav-items"
              onClick={() => setDropdownMenuState("vehicle-accessories")}
            >
              <span className="text">Vehicle Accessories</span>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
            <li
              className="nav-items"
              onClick={() => setDropdownMenuState("apparel-mobile")}
            >
              <span className="text">Apparel</span>
              <span className="icon">
                <AiOutlineRight />
              </span>
            </li>
            <li
              className="nav-items"
              onClick={() => setDropdownMenuState("lifestyle-mobile")}
            >
              <span className="text">Lifestyle</span>
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
      {/* ------------------------------End  Toggle  Menu------------------------------  */}

      {/* ------------------------------Start Language Group------------------------------  */}
      <div
        className={
          languageBox
            ? "language-list menu-box isOpenMenu"
            : "language-list menu-box"
        }
      >
        <div className="cart-head-dropdown">
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
       <LanguageList/>
      </div>
      {/* ------------------------------End Language Group------------------------------  */}

      {/* ------------------------------Start Cart-Box ------------------------------  */}
      <div
        className={
          cartIsOpen ? "cart-box menu-box isOpenMenu" : "cart-box menu-box"
        }
      >
        <div className="cart-head">
          <div className="icon">
            <AiOutlineClose onClick={() => setCartIsOpen(false)} />
          </div>
        </div>
        <div className="cart-body">
          <p className="text">Cart Is Empty</p>
          {/*------------  Products ------------ */}
          <ul className="product-list">
            <p className="text">Products</p>
            <li className="product-items">
              <div className="product-image">
                <img src={product1Pimary} alt="" />
              </div>
              <div className="product-info">
                <div className="general-info">
                  <h2 className="title">Model S All-Weather Interior Liners</h2>
                  <span className="price">250$</span>
                </div>
                <h3 className="categorTitle">Model S</h3>
                <span className="quantify">Quantify: 1</span>
              </div>
            </li>
          </ul>
          {/*------------ Cart-footer ------------ */}
          <div className="cart-footer">
            <div className="footer-info">
              <div className="left-side">
                <h6 className="cart-footer-title">Subtotal</h6>
                <span className="cart-footer-text">Excludes Sales tax</span>
              </div>
              <div className="right-side">
                <span className="cart-footer-price">$250.00</span>
              </div>
            </div>
            <WhiteBlackBtn text={"View Cart"} />
            <BlueWhiteBtn text={"Checkout"} />
          </div>
        </div>
      </div>
      {/* ------------------------------End Cart-Box ------------------------------  */}

      {/* ------------------------------ Start Mobile Menu------------------------------  */}

      {/* -------------- Mobile Format Charging  -------------- */}
      <div
        className={`dropdown-details-mobile menu-box ${
          dropdownMenuState === "charging-mobile" && "isOpenMenu"
        } `}
      >
        <div className="cart-head-dropdown">
          <span className="navigate" onClick={() => setDropdownMenuState(null)}>
            <div className="back-icon">
              <AiOutlineLeft />
            </div>
            Back
          </span>
          <div className="icon">
            <AiOutlineClose
              onClick={() => {
                setMenuIsOpen(false);
                setDropdownMenuState(null);
              }}
            />
          </div>
        </div>
        <MobileCharging />
      </div>

      {/* -------------- Mobile Format Vehicle-accessories   -------------- */}
      <div
        className={`dropdown-details-mobile menu-box ${
          dropdownMenuState === "vehicle-accessories" && "isOpenMenu"
        } `}
      >
        <div className="cart-head-dropdown">
          <span className="navigate" onClick={() => setDropdownMenuState(null)}>
            <div className="back-icon">
              <AiOutlineLeft />
            </div>
            Back
          </span>
          <div className="icon">
            <AiOutlineClose
              onClick={() => {
                setMenuIsOpen(false);
                setDropdownMenuState(null);
              }}
            />
          </div>
        </div>
        <MobileVehicleAccessories />
      </div>

      {/* -------------- Mobile Format Apparel  -------------- */}
      <div
        className={`dropdown-details-mobile menu-box ${
          dropdownMenuState === "apparel-mobile" && "isOpenMenu"
        } `}
      >
        <div className="cart-head-dropdown">
          <span className="navigate" onClick={() => setDropdownMenuState(null)}>
            <div className="back-icon">
              <AiOutlineLeft />
            </div>
            Back
          </span>
          <div className="icon">
            <AiOutlineClose
              onClick={() => {
                setMenuIsOpen(false);
                setDropdownMenuState(null);
              }}
            />
          </div>
        </div>
        <MobileApparel />
      </div>

      {/* -------------- Mobile Format Lifestyle  -------------- */}
      <div
        className={`dropdown-details-mobile menu-box ${
          dropdownMenuState === "lifestyle-mobile" && "isOpenMenu"
        } `}
      >
        <div className="cart-head-dropdown">
          <span className="navigate" onClick={() => setDropdownMenuState(null)}>
            <div className="back-icon">
              <AiOutlineLeft />
            </div>
            Back
          </span>
          <div className="icon">
            <AiOutlineClose
              onClick={() => {
                setMenuIsOpen(false);
                setDropdownMenuState(null);
              }}
            />
          </div>
        </div>
        <MobileLifestyle />
      </div>
      {/* ------------------------------ End Mobile Menu------------------------------  */}

      <div
        className={`overlay  ${menuIsOpen || cartIsOpen ? "isOpen" : ""} `}
        onClick={() => {
          setMenuIsOpen(false);
          setLanguageBox(false);
          setDropdownMenuState(null);
          setCartIsOpen(false);
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
