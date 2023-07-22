// /* ------------------------------- Image ------------------------------- */
import logo from "../assets/img/tesla-9.svg";
import charging from "../assets/img/charging/FeaturedNavMPOS_1457768-02-G.avif";
import onTheRoad from "../assets/img/charging/FeaturedNavMPOS_1512830-00-A.avif";
import parts from "../assets/img/charging/FeaturedNavMPOS_1551813-00-A.avif";
import modelS from "../assets/img/vehicle-accessories/Model_S.avif";
import model3 from "../assets/img/vehicle-accessories/Model_3.avif";
import modelX from "../assets/img/vehicle-accessories/Model_x.avif";
import modelY from "../assets/img/vehicle-accessories/Model_y.avif";
import men from "../assets/img/apparel/mobile_nav_mens.avif";
import women from "../assets/img/apparel/mobile_nav_womens_chill2.avif";
import kids from "../assets/img/apparel/mobile_nav_kids_cyber.avif";
import bestSellers from "../assets/img/lifestyle/1715672-00-A_featured.avif";
import bags from "../assets/img/lifestyle/1859926-00-A_flyout_01.avif";
import drinkWare from "../assets/img/lifestyle/sipping-glass-flyout.avif";
import miniteslas from "../assets/img/lifestyle/FeaturedNavMPOS_1524001-00-A.avif";
import outDoor from "../assets/img/lifestyle/FeaturedNav_w_charger.avif";
import giftCart from "../assets/img/lifestyle/Tesla_giftcard.avif";

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
import WhiteBlackBtn from "./WhiteBlackBtn";

const Header = () => {
  //   /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);
  /* --------------------------- DropDown open-close -------------------------- */
  const [dropdownMenuState, setDropdownMenuState] = useState(null);
  /* --------------------------- Language open-close -------------------------- */
  const [languageBox, setLanguageBox] = useState(false);

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
  /* ------------------------ Other Page Default Design ----------------------- */
  useEffect(() => {
    if (location.pathname === "/") {
      setIsScrolled(false);
      setIsMouseOver(false);
    } else {
      setIsScrolled(true);
    }
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
          <div className="logo">
            <Link className="logo-img">
              <img src={logo} alt="logo" />
            </Link>
            <span className="stick">|</span>
            <Link className="current-page" to="/">
              Shop
            </Link>
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
                <Link to={`/shop/${"Vehicle Accessories"}/${"products"}`}>
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
      {/* ------------------------------End Language Group------------------------------  */}

      {/* ------------------------------ Start Mobile Menu------------------------------  */}

      {/* ------------------------------ Charging ------------------------------  */}
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
        <div className="cart-body">
          <h2 className="current-page">Charging</h2>
          <Link className="card">
            <div className="top">
              <img src={charging} alt="charging" />
            </div>
            <h4 className="title">Charging</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={onTheRoad} alt="onTheRoad" />
            </div>
            <h4 className="title">On The Road</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={parts} alt="parts" />
            </div>
            <h4 className="title">Parts</h4>
          </Link>
          <WhiteBlackBtn text={"View All"} />
        </div>
      </div>
      {/* ------------------------------ Vehicle-accessories ------------------------------  */}
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
        <div className="cart-body">
          <h2 className="current-page">Vehicle Accessories</h2>
          <Link className="card" to={`/shop/${"Vehicle Accessories"}/${"Model S"}`}>
            <div className="top">
              <img src={modelS} alt="teslaCar" className="car-img" />
            </div>
            <h4 className="title">Model S</h4>
          </Link>
          <Link className="card" to={`/shop/${"Vehicle Accessories"}/${"Model 3"}`}>
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
      </div>
      {/* ------------------------------ Apparel ------------------------------  */}
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
      </div>
      {/* ------------------------------ Lifestyle------------------------------  */}
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
        <div className="cart-body">
          <h2 className="current-page">LifeStyle</h2>
          <Link className="card">
            <div className="top">
              <img src={bestSellers} alt="bestSellers" />
            </div>
            <h4 className="title">Best Sellers</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={bags} alt="bags" />
            </div>
            <h4 className="title">Bags</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={drinkWare} alt="drinkWare" />
            </div>
            <h4 className="title">DrinkWare</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={miniteslas} alt="miniteslas" />
            </div>
            <h4 className="title">Mini Teslas</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={outDoor} alt="outDoor" />
            </div>
            <h4 className="title">OutDoor & Tech</h4>
          </Link>
          <Link className="card">
            <div className="top">
              <img src={giftCart} alt="giftCart" />
            </div>
            <h4 className="title">Gift Card</h4>
          </Link>
          <WhiteBlackBtn text={"View All"} />
        </div>
      </div>
      {/* ------------------------------ End Mobile Menu------------------------------  */}

      <div
        className={`overlay  ${menuIsOpen && "isOpen"} `}
        onClick={() => {
          setMenuIsOpen(false);
          setLanguageBox(false);
          setDropdownMenuState(null);
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
