/* eslint-disable react/prop-types */
import Button from "../../atoms/elements/button/button";

const AuthTemplate = ({ children, onSubmit, title, buttonTitle }) => {
  return (
    <div>
      <div className="signup-container">
        <h2>{title}</h2>
        {children}
        <Button
          className={"cart-btn"}
          title={buttonTitle}
          type="submit"
          onClick={onSubmit}
        ></Button>
      </div>
    </div>
  );
};

export default AuthTemplate;
