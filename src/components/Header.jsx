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

/* ------------------------------- Components ------------.------------------- */
import Product from "./Product";
import DropMenu from "./DropMenu";
import Dropdown from "./Dropdown";
import Btn from "./Btn";

/* -------------------------------- DataBase -------------------------------- */
import dropDownDb from "../db/dropDownDb";
import dropMobileMenuDb from "../db/dropMobileMenuDb";

/* --------------------------------- Context -------------------------------- */
import { ShopContext } from "../utils/ShopContext";
import { Auth } from "../utils/Auth";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Header = () => {
  //   /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);

  /* ------------------------------ Global State ------------------------------ */
  const { cart, cartSum, total, removeAllData } = useContext(ShopContext);
  const { token, logOut } = useContext(Auth);

  /* --------------------------- DropDown open-close -------------------------- */
  const [dropdownMenuState, setDropdownMenuState] = useState(null);

  /* --------------------------- DropMenu Open-Close -------------------------- */
  const [mobileDropmenu, setMobileDropmenu] = useState(null);

  /* -------------------------------- Language -------------------------------- */
  const { t, i18n } = useTranslation();
  const [activeLng, setActiveLng] = useState({});

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

  /* ------------------------- Find Active Language ------------------------- */
  useEffect(() => {
    const selectLanguage = dropMobileMenuDb.find((item) => item.id === 5);
    selectLanguage.items.map(
      (item) => item.lng === i18n.language && setActiveLng(item)
    );
  }, [i18n.language]);

  /* --------------------------- Close Language Area -------------------------- */
  useEffect(() => {
    if (i18n.language) {
      setMobileDropmenu(null);
    }
  }, [i18n.language]);

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
          <Link to="/" className="logo">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 278.7 36.3"
              width="2500"
              height="326"
            >
              <g id="TESLA">
                <path
                  className="st0"
                  d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3"
                />
                <g>
                  <path
                    className="st0"
                    d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"
                  />
                </g>
              </g>
            </svg>
          </Link>
          {/* ------------------------------NavBar------------------------------  */}
          <nav className="nav-bar">
            <ul
              className="nav-list"
              onMouseLeave={() => setDropdownMenuState(null)}
            >
              {dropDownDb.map((item) => (
                <li
                  className="nav-items"
                  onMouseEnter={() =>
                    setDropdownMenuState(item[`categorY${i18n.language}`])
                  }
                  key={item.id}
                >
                  <Link to={item.allProductUrl}>
                    {item[`categorY${i18n.language}`]}
                  </Link>
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
              {t("header.menu")}
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------Start SideBar Menu------------------------------  */}
      <div className={menuIsOpen ? "menu-box isOpenMenu " : "menu-box"}>
        <div className="cart-head">
          <div className="icon">
            <AiOutlineClose onClick={() => setMenuIsOpen(false)} />
          </div>
        </div>
        <div className="cart-body">
          <form className="seacrh-form-mobile" noValidate>
            <div className="form-group ">
              <div className="search-icon">
                <AiOutlineSearch />
              </div>
              <input type="text" />
            </div>
          </form>
          <ul className="nav-list-mobile">
            {dropDownDb.map((item) => (
              <li
                className="nav-items"
                onClick={() =>
                  setMobileDropmenu(item[`categorY${i18n.language}`])
                }
                key={item.id}
              >
                <span className="text">
                  {item[`categorY${i18n.language}`]}{" "}
                </span>
                <span className="icon">
                  <AiOutlineRight />
                </span>
              </li>
            ))}
          </ul>
          <ul className="menu-general-info-list">
            <li className="menu-items">
              <Link>{t("header.shop-faq")}</Link>
            </li>

            {!token ? (
              <li className="menu-items">
                <Link to="/login">{t("header.login")}</Link>
              </li>
            ) : (
              <ul className="menu-general-info-list">
                <li className="menu-items">
                  <Link to="/profile">Profile</Link>
                </li>

                <li className="menu-items" onClick={logOut}>
                  <Link to="/">{t("header.logout")}</Link>
                </li>
              </ul>
            )}

            <li className="language-select menu-items">
              <div
                className="info"
                onClick={() => setMobileDropmenu(t("header.lng"))}
              >
                <div className="left-side">
                  <MdOutlineLanguage />
                </div>
                <div className="right-side">
                  <h5 className="country">{activeLng.country}</h5>
                  <p className="language"> {activeLng.language}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------End  SideBar  Menu------------------------------  */}

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
          {cart.length === 0 && (
            <p className="text">{t("header.cart-box-empty")}</p>
          )}
          {cart.length !== 0 && (
            <p className="text">{t("header.cart-box-head-title")}</p>
          )}

          {/*------------  Products ------------ */}
          <Product />
          {/*------------ Cart-footer ------------ */}
          {cart.length !== 0 && (
            <div className="cart-footer">
              <div className="footer-info">
                <div className="left-side">
                  <h6 className="cart-footer-title">
                    {t("header.cart-footer-title")}
                  </h6>
                  <span className="cart-footer-text">
                    {t("header.cart-footer-text")}
                  </span>
                </div>
                <div className="right-side">
                  <span className="cart-footer-price">${total}</span>
                </div>
              </div>
              <div className="btn-primary">
                <Btn text={t("btn.view-all")} link={"/cart-products"} />
              </div>
              <div className="btn-secondary">
                <Btn
                  text={t("btn.remove-all-data")}
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
            {t("header.cart-box-back")}
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
        className={`overlay  ${
          menuIsOpen || cartIsOpen ? "isOpen coloredBg" : ""
        }   ${inpIsOpen && "isOpen"}  `}
        onClick={() => {
          setMenuIsOpen(false);
          setDropdownMenuState(null);
          setMobileDropmenu(null);
          setCartIsOpen(false);
          setInpIsOpen(false);
        }}
      ></div>
    </header>
  );
};

export default Header;
