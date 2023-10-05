import React from "react";
import { Link } from "react-router-dom";
import "./header_tab.style.css";

function Header_tab({ path, title }) {
  return (
    <Link to={path}>
      <li>
        <a>{title}</a>
      </li>
    </Link>
  );
}

export default Header_tab;
