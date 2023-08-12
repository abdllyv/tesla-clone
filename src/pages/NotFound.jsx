/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

/* ---------------------------------- Image --------------------------------- */
import notFound from "../assets/img/not-found.png";

/* -------------------------------- Language -------------------------------- */
import { useTranslation } from "react-i18next";
const NotFound = () => {
  /* -------------------------------- Language -------------------------------- */
  const { t } = useTranslation();
  return (
    <main>
      <section className="not-found">
        <div className="container">
          <div className="error">
            <div className="info">
              <span className="error-code">{t("not-found.error-code")}</span>
              <h5 className="title">{t("not-found.title")}</h5>
              <p className="text">
                {t("not-found.text")}{" "}
                <Link to="/">{t("not-found.text-link")}</Link>
              </p>
            </div>
            <div className="error-image">
              <img src={notFound} alt="notFound" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
