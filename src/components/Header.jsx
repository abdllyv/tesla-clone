// /* ------------------------------- Image ------------------------------- */
import logo from "../assets/img/tesla-9.svg";

/* --------------------------------- Router --------------------------------- */
import { Link, useLocation } from "react-router-dom";
/* ----------------------------------React Hook ---------------------------------- */
import { useContext, useEffect, useState } from "react";

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
import Product from "./Product";
import { ShopContext } from "../utils/ShopContext";
import DropMenu from "./DropMenu";
import Dropdown from "./Dropdown";
import dropDownDb from "../db/dropDownDb";
import Btn from "./Btn";

const Header = () => {
  //   /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);

  /* ------------------------------ Global State ------------------------------ */
  const { cart, cartSum, total, removeAllData } = useContext(ShopContext);
  /* --------------------------- DropDown open-close -------------------------- */
  const [dropdownMenuState, setDropdownMenuState] = useState(null);
  /* --------------------------- DropMenu Open-Close -------------------------- */
  const [mobileDropmenu, setMobileDropmenu] = useState(null);
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
    setMobileDropmenu(null);
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
            <ul
              className="nav-list"
              onMouseLeave={() => setDropdownMenuState(null)}
            >
              {dropDownDb.map((item) => (
                <li
                  className="nav-items"
                  onMouseEnter={() => setDropdownMenuState(item.category)}
                  key={item.id}
                >
                  <Link to={item.allProductUrl}>{item.category}</Link>
                  <Dropdown dropdownMenuState={dropdownMenuState} />
                </li>
              ))}
              <Dropdown dropdownMenuState={dropdownMenuState} />
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
              <div className="count">{cartSum}</div>
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
            {dropDownDb.map((item) => (
              <li
                className="nav-items"
                onClick={() => setMobileDropmenu(item.category)}
                key={item.id}
              >
                <span className="text">{item.category} </span>
                <span className="icon">
                  <AiOutlineRight />
                </span>
              </li>
            ))}
          
          </ul>
          <ul className="menu-general-info-list">
            <li className="menu-items">
              <Link>Shop FAQ</Link>
            </li>
            <li className="menu-items">
              <Link>Sign In</Link>
            </li>
            <li className="language-select menu-items">
              <div
                className="info"
                onClick={() => setMobileDropmenu("Language")}
              >
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
          {cart.length === 0 && <p className="text">Cart Is Empty</p>}
          {cart.length !== 0 && <p className="text">Products</p>}

          {/*------------  Products ------------ */}
          {cart.map((item) => (
            <Product key={item.id} data={item} />
          ))}
          {/*------------ Cart-footer ------------ */}
          {cart.length !== 0 && (
            <div className="cart-footer">
              <div className="footer-info">
                <div className="left-side">
                  <h6 className="cart-footer-title">Subtotal</h6>
                  <span className="cart-footer-text">Excludes Sales tax</span>
                </div>
                <div className="right-side">
                  <span className="cart-footer-price">${total}</span>
                </div>
              </div>
              <div className="btn-primary">
                <Btn text={"View Cart"} link={"/cart-products"} />
              </div>
              <div className="btn-secondary">
                <Btn
                  text={"Remove All Data"}
                  link={"#"}
                  onClick={removeAllData}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ------------------------------End Cart-Box ------------------------------  */}

      {/* ------------------------------ Start Mobile Menu------------------------------  */}
      <div
        className={`drop-menu menu-box ${
          mobileDropmenu !== null && "isOpenMenu"
        } `}
      >
        <div className="cart-head-dropdown">
          <span className="navigate" onClick={() => setMobileDropmenu(null)}>
            <div className="back-icon">
              <AiOutlineLeft />
            </div>
            Back
          </span>
          <div className="icon">
            <AiOutlineClose
              onClick={() => {
                setMenuIsOpen(false);
                setMobileDropmenu(null);
              }}
            />
          </div>
        </div>
        <DropMenu dropMenuData={mobileDropmenu} />
      </div>
      {/* ------------------------------ End Mobile Menu------------------------------  */}

      <div
        className={`overlay  ${menuIsOpen || cartIsOpen ? "isOpen" : ""} `}
        onClick={() => {
          setMenuIsOpen(false);
          setDropdownMenuState(null);
          setMobileDropmenu(null);
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
