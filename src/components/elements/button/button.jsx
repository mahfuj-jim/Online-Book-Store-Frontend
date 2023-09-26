/* eslint-disable react/prop-types */
import "./button.style.css";

const Button = ({title}) => {
    return (
        <button className="btn">{title}</button>
    );
}

export default Button;
