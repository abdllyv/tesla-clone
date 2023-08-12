/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";

const Footer = () => {
  /* ----------------------------- Change Language ---------------------------- */
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <ul className="footer-list">
            <li className="footer-items">
              <Link>{t("footer.item-first")}</Link>
            </li>
            <li className="footer-items">
              <Link>{t("footer.item-second")}</Link>
            </li>
            <li className="footer-items">
              <Link>{t("footer.item-third")}</Link>
            </li>
            <li className="footer-items">
              <Link>{t("footer.item-four")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
