const FooterItem = ({ title, children }) => {
  return (
    <div  className="footer-col-1">
      <h4>{title}</h4>
      <ul>{...children}</ul>
    </div>
  );
};

export default FooterItem;
