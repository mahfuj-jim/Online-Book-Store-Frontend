import { Link } from "react-router-dom";
import "./header.style.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a>Online Book Store</a>
        <div className="nav-btn">
          <ul>
          <Link to={`/`}>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <li>
              <a>Books</a>
            </li>
            <li>
              <a>New Release</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <Link to={`/signup`}>
              <li>
                <a>Signup</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
