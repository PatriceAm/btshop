import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav_container">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/basket">BASKET</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
