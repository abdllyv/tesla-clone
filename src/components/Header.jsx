/* ------------------------------- Logo Image ------------------------------- */
import logo from "../assets/img/tesla-9.svg";
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
  /* ------------------------------- Local State ------------------------------ */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inpIsOpen, setInpIsOpen] = useState(false);
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
              <li className="nav-items">
                <Link>Charging</Link>
              </li>
              <li className="nav-items">
                <Link>Vehicle Accessories</Link>
              </li>
              <li className="nav-items">
                <Link>Apparel</Link>
              </li>
              <li className="nav-items">
                <Link>Lifestyle</Link>
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
          <ul className="nav-list">
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
