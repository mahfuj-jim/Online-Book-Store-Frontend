import "./footer.style.css";
import FooterItem from "./footer_item";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="row">
        <FooterItem title={"Home"}>
          <li>Home</li>
          <li>Services</li>
          <li>Shop</li>
          <li>Career</li>
          <li>Contacts</li>
        </FooterItem>
        <FooterItem title={"About Us"}>
          <li>CEO Message</li>
          <li>Philosophy</li>
          <li>Business Strategies</li>
          <li>History</li>
          <li>Publications</li>
          <li>Investors</li>
        </FooterItem>
        <FooterItem title={"Our Business"}>
          <li>Camera Group</li>
          <li>Printing Group</li>
          <li>Imaging Group</li>
          <li>Medical Group</li>
          <li>Industrial Group</li>
          <li>Special Selection</li>
        </FooterItem>
        <FooterItem title={"Sustainability"}>
          <li>Environment</li>
          <li>Society</li>
          <li>Governance</li>
          <li>Bird Branch Project</li>
          <li>Sustainability Report</li>
          <li>New Cosmos of Photography</li>
        </FooterItem>
      </div>
    </div>
  );
};

export default Footer;
