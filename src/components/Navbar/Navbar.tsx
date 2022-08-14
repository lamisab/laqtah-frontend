import { Link } from "react-router-dom";
import "./Navbar.css";

interface Props {
  setIsOpen: (value: boolean) => void;
}

const Navbar = ({ setIsOpen }: Props) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link to="/">Laqtah 📷</Link>
        </div>
        <div className="navbar__right">
          <Link className="navbar__rightItem" to="/">
            Home
          </Link>
          <p onClick={() => setIsOpen(true)} className="navbar__rightItem">
            Contact Us
          </p>
          <Link className="navbar__rightItem" to="/account">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
