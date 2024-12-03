import {LOGO_URL} from "../utils/constants";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav_items">
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          {/* <li><Link to="/about">About</Link></li> */}
          {/* <li><Link to="/contact-us">LazyComp</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
