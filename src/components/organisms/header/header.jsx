import Header_tab from "../../molecules/header/header_tab";
import "./header.style.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a>Online Book Store</a>
        <div className="nav-btn">
          <ul>
            <Header_tab path={"/"} title={"Home"}></Header_tab>
            <Header_tab path={"/"} title={"Books"}></Header_tab>
            <Header_tab path={"/"} title={"New Release"}></Header_tab>
            <Header_tab path={"/login"} title={"Login"}></Header_tab>
            <Header_tab path={"/signup"} title={"Signup"}></Header_tab>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
