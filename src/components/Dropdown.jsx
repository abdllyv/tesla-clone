/* ---------------------------------- React --------------------------------- */
import { Link } from "react-router-dom";

/* --------------------------------- Router --------------------------------- */
import { useEffect, useState } from "react";

/* -------------------------------- Database -------------------------------- */
import dropDownDb from "../db/dropDownDb";

const Dropdown = ({ dropdownMenuState }) => {
  
  /* ------------------------------- Local State ------------------------------ */
  const [data, setData] = useState(null);

/* ---------------------------- Select Data Type ---------------------------- */
  useEffect(() => {
    dropDownDb.map(
      (item) => item.category === dropdownMenuState && setData(item)
    );
  }, [dropdownMenuState]);

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
                    {list.listTitle}
                  </Link>
                  <ul className="dropmenu-list">
                    {list.items.map((item) => (
                      <li className="drop-item" key={item.id}>
                        <Link to={item.url}>{item.itemTitle}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="right-side">
              <img src={data.categoryImg} alt={data.imageTitle} />
              <h3 className="title">{data.imageTitle}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
