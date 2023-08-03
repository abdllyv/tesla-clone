import { Link } from "react-router-dom";
import notFound from "../assets/img/not-found.png"

const NotFound = () => {
  return (
    <main>
      <section className="not-found">
        <div className="container">
          <div className="error">
            <div className="info">
              <span className="error-code">404</span>
              <h5 className="title">Whoops! Sorry about that.</h5>
              <p className="text">
                Join Starman back at the <Link to="/">Home Page</Link>
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
