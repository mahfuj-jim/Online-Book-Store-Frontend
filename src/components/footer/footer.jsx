import "./footer.style.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="row">
                <div className="footer-col-1">
                    <h4>Home</h4>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Shop</li>
                        <li>Career</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="footer-col-1">
                    <h4>About Us</h4>
                    <ul>
                        <li>CEO Message</li>
                        <li>Philosophy</li>
                        <li>Business Strategies</li>
                        <li>History</li>
                        <li>Publications</li>
                        <li>Investors</li>
                    </ul>
                </div>
                <div className="footer-col-1">
                    <h4>Our Business</h4>
                    <ul>
                        <li>Camera Group</li>
                        <li>Printing Group</li>
                        <li>Imaging Group</li>
                        <li>Medical Group</li>
                        <li>Industrial Group</li>
                        <li>Special Selection</li>
                    </ul>
                </div>
                <div className="footer-col-1">
                    <h4>Sustainability</h4>
                    <ul>
                        <li>Environment</li>
                        <li>Society</li>
                        <li>Governance</li>
                        <li>Bird Branch Project</li>
                        <li>Sustainability Report</li>
                        <li>New Cosmos of Photography</li>
                    </ul>
                </div>
            </div>
            <br></br>
            <br></br>
            <p>© Mahfuj Ahmed Jim</p>
        </div>
    );
}

export default Footer;