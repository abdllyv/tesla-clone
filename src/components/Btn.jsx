/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";

const Btn = ({ text, link, onClick, disabled }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled || false}>
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default Btn;
