/* ---------------------------------- React --------------------------------- */
import { Link } from "react-router-dom";

/* --------------------------------- Router --------------------------------- */
import { useEffect, useState } from "react";

/* -------------------------------- Database -------------------------------- */
import dropDownDb from "../db/dropDownDb";

  /* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Dropdown = ({ dropdownMenuState }) => {
  
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState(null);

  /* -------------------------------- Language -------------------------------- */
  const {i18n}=useTranslation()

/* ---------------------------- Select Data Type ---------------------------- */
  useEffect(() => {
    dropDownDb.map(
      (item) => item[`categorY${i18n.language}`]=== dropdownMenuState && setData(item)
    );
  }, [dropdownMenuState, i18n.language]);

  return (
    <div
      className={`dropdown-menu ${dropdownMenuState !== null ? "isShown" : ""}`}
    >
      <div className="dropdown-container">
        {data && (
          <div className="row">
            <div className="left-side">
              {data.products.map((list) => (
                <div className="drop-list" key={list.id}>
                  <Link className="drop-title" to={list.categoryUrl}>
                    {list[`listTitlE${i18n.language}`]}
                  </Link>
                  <ul className="dropmenu-list">
                    {list.items.map((item) => (
                      <li className="drop-item" key={item.id}>
                        <Link to={item.url}>{item[`itemTitlE${i18n.language}`]}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="right-side">
              <img src={data.categoryImg} alt={data[`imageTitlE${i18n.language}`]} />
              <h3 className="title">{data[`imageTitlE${i18n.language}`]} </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
