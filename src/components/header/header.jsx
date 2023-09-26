import "./header.style.css";

const Header = () => {
    return (
        <div class="header">
            <nav class="navbar">
                <a>Online Book Store</a>
                <div class="nav-btn">
                    <ul>
                        <li><a href>Home</a></li>
                        <li><a href="#services">Books</a></li>
                        <li><a href="#office">New Release</a></li>
                        <li><a href="#academy">Blog</a></li>
                        <li><a href="#footer">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;