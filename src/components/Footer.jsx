import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <ul className="footer-list">
            <li className="footer-items">
              <Link>Tesla © 2023</Link>
            </li>
            <li className="footer-items">
              <Link>Privacy & Legal</Link>
            </li>
            <li className="footer-items">
              <Link>Locations</Link>
            </li>
            <li className="footer-items">
              <Link>Recalls</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
