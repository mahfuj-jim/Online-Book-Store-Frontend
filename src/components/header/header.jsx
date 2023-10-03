import { Link } from "react-router-dom";
import "./header.style.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a>Online Book Store</a>
        <div className="nav-btn">
          <ul>
            <li>
              <a href>Home</a>
            </li>
            <li>
              <a href="#services">Books</a>
            </li>
            <li>
              <a href="#office">New Release</a>
            </li>
            <li>
              <a href="#academy">Blog</a>
            </li>
            <Link to={`/signup`}>
              <li>
                <a href="#footer">Signup</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
